import { Skeleton } from '../ui/skeleton'

export function LoadingEditAddressContainer() {
  return (
    <div className="w-full px-6 py-10 space-y-5">
      <div className="space-y-2.5">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-full h-10" />
      </div>
      <div className="space-y-2.5">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-full h-10" />
      </div>
      <div className="space-y-2.5">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-full h-10" />
      </div>
      <Skeleton className="w-64 h-4" />
      <div className="flex w-full justify-end items-center gap-4">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-32 h-10" />
      </div>
    </div>
  )
}
