'use client'

import { addressesApiService } from '@/app/services/addresses-api-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AddressForm } from './address-form'

const addressFormSchema = z.object({
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

export function AddAddressForm() {
  const form = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  })

  const { planet, fullName, location, address } = form.getValues()

  async function addAddress(formData: AddressFormData) {
    if (!location && !address) {
      form.setError('location', { message: 'Required field' })
      form.setError('address', { message: 'Required field' })
      return
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await addressesApiService
    // .updateAddress(formData)
    // .then((res) => {
    //   setData(form.getValues())
    //   toast.success('Address updated successfully!')
    // })
    // .catch(() => {
    //   toast.error('Something went wrong!')
    // })
  }

  return <AddressForm form={form} submitFn={addAddress} />
}
