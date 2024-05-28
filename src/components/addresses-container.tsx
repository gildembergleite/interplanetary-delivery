import { addressesApiService } from '@/app/services/addresses-api-service'
import { AddressCard } from './address-card'

export async function AddressesContainer() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const addresses = await addressesApiService.getAddresses()

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <AddressCard key={address.id} {...address} />
      ))}
    </div>
  )
}
