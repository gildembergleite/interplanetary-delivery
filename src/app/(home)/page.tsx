import { NavigateButton } from '@/components/client-components/navigate-button'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen justify-center items-center gap-6">
      <NavigateButton title="Addresses Page" page="/addresses" />
    </main>
  )
}
