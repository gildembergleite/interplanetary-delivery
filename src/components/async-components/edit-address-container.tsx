import { addressesApiService } from '@/app/services/addresses-api-service'
import { EditAddressForm } from '@/components/client-components/edit-address-form-content'

export default async function EditAddressContainer({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const address = await addressesApiService.getAddressById({ id })

  return (
    <main className="w-full px-6 py-8">
      <EditAddressForm {...address} />
    </main>
  )
}
