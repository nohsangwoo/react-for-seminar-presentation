import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type TodosType = {
  completed: boolean
  id: number
  title: string
  userId: number
}
export const getTodos = async (index: number): Promise<TodosType> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${index}`,
  )
  return data
}

export const useFetchOrder = (queryKeys: any[], index: number) =>
  useQuery(queryKeys, () => getTodos(index), {
    cacheTime: 1000 * 60 * 60 * 24, // 캐시 유지 시간(기본적으로 5분)
    retry: 3, // retry 횟수(기본적으로 3회 시도함)
  })
