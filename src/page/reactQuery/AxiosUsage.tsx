import { useState, useEffect } from 'react'
import axios from 'axios'
import fetchSlice from 'src/store/reducers/fetchSlice'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import _ from 'lodash'
export const getMyIP = async () => {
  const { data } = await axios.get('http://example.com/movies.json')
  return data.ip
}

const ReactQueryHook = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  const todos = useAppSelector(state => state.fetchs.todos)

  useEffect(() => {
    const fetchMovies = async (): Promise<void> => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
        )
        dispatch(fetchSlice.actions.setTodos(data))
      } catch (e) {
        console.log(e)
        alert(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovies()
  }, [dispatch])
  return (
    <div>
      {isLoading
        ? 'loading...'
        : todos.map((data, index) => {
            return (
              <div
                style={{
                  border: '1px solid black',
                  margin: '20px',
                  padding: '20px',
                }}
                key={index}
              >
                <div>id: {data.id}</div>
                <div>userId: {data.userId}</div>
                <div>title: {data.title}</div>
                <div>completed: {data.completed ? 'true' : 'false'}</div>
              </div>
            )
          })}
    </div>
  )
}

export default ReactQueryHook
