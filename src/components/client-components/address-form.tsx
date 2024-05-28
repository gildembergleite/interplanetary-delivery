'use client'

import { LoaderCircleIcon } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { NavigateButton } from '../client-components/navigate-button'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface AddressFormProps<T> {
  form: UseFormReturn<T | any>
  submitFn: (formData: T) => void
  disabledButton?: boolean
}

export function AddressForm<T>({
  form,
  submitFn,
  disabledButton,
}: AddressFormProps<T>) {
  const { planet } = form.getValues()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitFn)} className="space-y-4">
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
            disabled={form.formState.isSubmitting || disabledButton}
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
