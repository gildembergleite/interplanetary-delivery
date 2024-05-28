import EditAddressContainer from '@/components/async-components/edit-address-container'
import { Header } from '@/components/header'
import { LoadingEditAddressContainer } from '@/components/loadings/loading-edit-address-container'
import { Suspense } from 'react'

interface EditAddressProps {
  params: {
    id: string
  }
}

export default function EditAddress({ params: { id } }: EditAddressProps) {
  return (
    <>
      <Header title="Edit address" />
      <Suspense fallback={<LoadingEditAddressContainer />}>
        <EditAddressContainer id={id} />
      </Suspense>
    </>
  )
}
