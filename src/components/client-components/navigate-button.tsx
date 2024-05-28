'use client'
import { useRouter } from 'next/navigation'
import { Button, ButtonProps } from '../ui/button'

interface NavigationButtonProps extends ButtonProps {
  page: string
  title: string
}

export function NavigateButton({
  page,
  title,
  ...rest
}: NavigationButtonProps) {
  const { push } = useRouter()
  return (
    <Button onClick={() => push(page)} {...rest}>
      {title}
    </Button>
  )
}
