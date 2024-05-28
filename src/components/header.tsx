import { BackButton } from './client-components/back-button'

export function Header({ title }: { title: string }) {
  return (
    <header className="w-full border-b">
      <div className="flex items-center gap-4 p-6">
        <BackButton />
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
    </header>
  )
}
