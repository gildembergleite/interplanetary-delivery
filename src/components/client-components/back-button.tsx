'use client'
import { ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export function BackButton() {
  const { back } = useRouter()
  return (
    <Button
      variant={'outline'}
      size={'default'}
      onClick={back}
      className="h-min p-0.5"
    >
      <ChevronLeftIcon size={18} />
    </Button>
  )
}
