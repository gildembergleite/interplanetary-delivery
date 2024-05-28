'use client'

import { addressesApiService } from '@/app/services/addresses-api-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { AddressForm } from './address-form'

const addressFormSchema = z.object({
  id: z.string().optional(),
  planet: z.enum(['MARS', 'EARTH'], {
    required_error: 'Please enter a planet name',
  }),
  location: z.string().optional(),
  address: z.string().optional(),
  fullName: z.string({
    required_error: 'Please enter a local full name',
  }),
})

export type AddressFormData = z.infer<typeof addressFormSchema>

export function EditAddressForm(addressData: AddressFormData) {
  const [data, setData] = useState(addressData)

  const form = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      id: data.id ?? undefined,
      planet: data.planet,
      fullName: data.fullName,
      location: data.location !== null ? data.location : undefined,
      address: data.address !== null ? data.location : undefined,
    },
  })

  const { planet, fullName, location, address } = form.getValues()

  async function updateAddress(formData: AddressFormData) {
    if (!location && !address) {
      form.setError('location', { message: 'Required field' })
      form.setError('address', { message: 'Required field' })
      return
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await addressesApiService
      .updateAddress(formData)
      .then((res) => {
        setData(form.getValues())
        toast.success('Address updated successfully!')
      })
      .catch(() => {
        toast.error('Something went wrong!')
      })
  }

  const areFormAndDataTheSame =
    planet === data.planet &&
    fullName === data.fullName &&
    ((data.location !== null && data.location === location) ||
      (data.address !== null && data.address === address))

  return (
    <AddressForm
      form={form}
      submitFn={updateAddress}
      disabledButton={areFormAndDataTheSame}
    />
  )
}
