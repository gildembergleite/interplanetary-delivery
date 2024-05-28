import { ApiAddresses } from '@/entities/api-addresses'
import { env } from '@/env'

export const addressesApiService = new ApiAddresses({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
})
