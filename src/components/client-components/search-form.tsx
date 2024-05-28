'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SearchIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function handleChange(value: string) {
    const params = new URLSearchParams(searchParams)
    if (value !== 'all') {
      params.set('planet', value.toUpperCase())
    } else {
      params.delete('planet')
    }

    setTimeout(() => {
      replace(`${pathname}?${params.toString()}`)
    }, 300)
  }

  return (
    <div className="flex w-full">
      <Select
        onValueChange={(value) => handleChange(value)}
        defaultValue={searchParams.get('planet') ?? ''}
      >
        <SelectTrigger defaultValue={'all'}>
          <div className="flex items-center gap-2">
            <SearchIcon size={18} className="text-muted-foreground" />
            <SelectValue placeholder="Select a planet" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All planets</SelectItem>
          <SelectItem value="mars">Mars</SelectItem>
          <SelectItem value="earth">Earth</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
