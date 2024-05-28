import { AddAddressForm } from '@/components/client-components/add-address-form-content'
import { Header } from '@/components/header'

interface AddAddressProps {
  params: {
    id: string
  }
}

export default async function AddAddress({ params: { id } }: AddAddressProps) {
  return (
    <>
      <Header title="Edit address" />
      <main className="w-full px-6 py-8">
        <AddAddressForm />
      </main>
    </>
  )
}
