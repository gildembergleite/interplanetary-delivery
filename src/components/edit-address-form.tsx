'use client'

import { addressesApiService } from '@/app/services/addresses-api-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { NavigateButton } from './client-components/navigate-button'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const editAddressFormSchema = z.object({
  id: z.string(),
  planet: z.enum(['MARS', 'EARTH'], {
    required_error: 'Please enter a planet name',
  }),
  location: z.string().optional(),
  address: z.string().optional(),
  fullName: z.string({
    required_error: 'Please enter a local full name',
  }),
})

export type EditAddressFormData = z.infer<typeof editAddressFormSchema>

export function EditAddressForm(addressData: EditAddressFormData) {
  const [data, setData] = useState(addressData)

  const form = useForm<EditAddressFormData>({
    resolver: zodResolver(editAddressFormSchema),
    defaultValues: {
      id: data.id,
      planet: data.planet,
      fullName: data.fullName,
      location: data.location !== null ? data.location : undefined,
      address: data.address !== null ? data.location : undefined,
    },
  })

  const { planet, fullName, location, address } = form.getValues()

  async function updateAddress(formData: EditAddressFormData) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(updateAddress)} className="space-y-4">
        <FormField
          control={form.control}
          name="planet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Planet
                <sup className="text-destructive">*</sup>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a planet" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="MARS">MARS</SelectItem>
                  <SelectItem value="EARTH">EARTH</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full name
                <sup className="text-destructive">*</sup>
              </FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        {planet && (
          <FormField
            control={form.control}
            name={planet === 'MARS' ? 'location' : 'address'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {planet === 'MARS' ? 'Location' : 'Address'}
                  <sup className="text-destructive">*</sup>
                </FormLabel>
                <Input {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormDescription>
          All fields marked with <sup className="text-destructive">*</sup> must
          be required
        </FormDescription>

        <div className="flex items-center justify-end w-full space-x-4">
          <NavigateButton
            title="Cancel"
            page="/addresses"
            variant={'secondary'}
          />
          <Button
            disabled={form.formState.isSubmitting || areFormAndDataTheSame}
            className="gap-2"
          >
            {form.formState.isSubmitting && (
              <LoaderCircleIcon size={18} className="animate-spin" />
            )}
            <span>Save changes</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
