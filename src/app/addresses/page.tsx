import { AddressesContainer } from '@/components/async-components/addresses-container'
import { NavigateButton } from '@/components/client-components/navigate-button'
import { Header } from '@/components/header'
import { LoadingAddressesContainer } from '@/components/loadings/loading-addresses-container'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { Suspense } from 'react'

export default async function AddressPage() {
  return (
    <>
      <Header title="Address" />
      <main className="flex flex-col justify-center items-center w-full px-6 py-8 gap-8">
        <div className="w-full">
          <div className="flex w-full justify-between items-center gap-4">
            <div className="flex w-full items-center border px-2 rounded-md">
              <SearchIcon size={18} className="text-muted-foreground" />
              <Input
                placeholder="Search address..."
                className="border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
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
          <Suspense fallback={<LoadingAddressesContainer />}>
            <AddressesContainer />
          </Suspense>
        </div>
      </main>
    </>
  )
}
