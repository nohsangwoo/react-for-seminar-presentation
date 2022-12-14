import { useQuery } from '@tanstack/react-query'

export const useClientValue = <T extends any[], U extends any>(
  key: T,
  initialData: U,
) =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data
