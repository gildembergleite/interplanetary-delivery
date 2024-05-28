import { Skeleton } from '../ui/skeleton'

export function LoadingAddressesContainer() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-[193px]" />
      ))}
    </div>
  )
}
