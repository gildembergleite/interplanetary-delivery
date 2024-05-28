import { AddressesContainer } from '@/components/async-components/addresses-container'
import { NavigateButton } from '@/components/client-components/navigate-button'
import { SearchForm } from '@/components/client-components/search-form'
import { Header } from '@/components/header'

export default async function AddressPage() {
  return (
    <>
      <Header title="Address" />
      <main className="flex flex-col justify-center items-center w-full px-6 py-8 gap-8">
        <div className="w-full">
          <div className="flex w-full justify-between items-center gap-4">
            <SearchForm />
            <NavigateButton
              title="Add address"
              page="/addresses/add"
              variant={'primary-outline'}
              className="px-8"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-lg font-semibold">Address list</h2>
          <AddressesContainer />
        </div>
      </main>
    </>
  )
}
