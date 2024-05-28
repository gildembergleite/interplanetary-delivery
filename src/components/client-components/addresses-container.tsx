'use client'

import { AddressType } from '@/@types/address'
import { addressesApiService } from '@/app/services/addresses-api-service'
import { XIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LoadingAddressesContainer } from '../loadings/loading-addresses-container'
import { AddressCard } from '../server-components/address-card'

export function AddressesContainer() {
  const [addresses, setAddresses] = useState<AddressType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const searchParams = useSearchParams()

  const query = searchParams.get('planet')

  async function getAddresses() {
    setIsLoading(true)
    const params = new URLSearchParams(searchParams)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const addresses = await addressesApiService.getAddresses(params)
    setAddresses(addresses)
    setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => getAddresses(), 300)
  }, [query])

  return (
    <div className="space-y-4">
      {isLoading ? (
        <LoadingAddressesContainer />
      ) : (
        addresses.map((address) => (
          <AddressCard key={address.id} {...address} />
        ))
      )}
      {!isLoading && addresses.length === 0 && (
        <div className="flex justify-center items-center w-full bg-muted p-10 text-center gap-4">
          <XIcon size={18} className="text-destructive" />
          <p>No results with search params</p>
        </div>
      )}
    </div>
  )
}
