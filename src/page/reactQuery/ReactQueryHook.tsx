import axios from 'axios'
import { useEffect } from 'react'
import fetchSlice, { TodosType } from '@src/store/reducers/fetchSlice'
import { useAppDispatch, useAppSelector } from '@src/store/store'

export const getMyIP = async () => {
  const { data } = await axios.get('http://example.com/movies.json')
  return data.ip
}

const ReactQueryHook = () => {
  const todos = useAppSelector(state => state.fetchs.todos)
  // console.log('todos', todos)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchMovies = async (): Promise<void> => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      )
      console.log(data)
      dispatch(fetchSlice.actions.setTodos(data))
    }
    fetchMovies()
  }, [dispatch])
  return <div></div>
}

export default ReactQueryHook
