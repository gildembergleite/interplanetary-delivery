import { addressesApiService } from '@/app/services/addresses-api-service'
import { EditAddressForm } from '@/components/client-components/edit-address-form-content'
import { Header } from '@/components/header'

interface EditAddressProps {
  params: {
    id: string
  }
}

export default async function EditAddress({
  params: { id },
}: EditAddressProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const address = await addressesApiService.getAddressById({ id })

  return (
    <>
      <Header title="Edit address" />
      <main className="w-full px-6 py-8">
        <EditAddressForm {...address} />
      </main>
    </>
  )
}
