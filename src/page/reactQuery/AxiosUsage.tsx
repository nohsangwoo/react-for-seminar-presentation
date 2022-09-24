import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@src/store/store'
import _ from 'lodash'
import { fetchApi } from '@src/components/api/fetchApi'

// 컴포넌트 단에서 해결하지 않는다면 아래와 같이 어디선가 도메인으로 관리한다.
// 이전에 보통 이것을 redux-saga로 관리했다.
export const getFetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log('data!!: ', data)
  return data
}

const ReactQueryHook = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, isSuccess] = useState(false)
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.fetchs.todos)

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        fetchApi('https://jsonplaceholder.typicode.com/todos')
        // 1. 에러 핸들링 표시 하려면 아래 내용을 주석 해제
        // throw new Error()
        isSuccess(true)
      } catch (e) {
        setError(!!e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTodos()
  }, [dispatch])

  useEffect(() => {
    if (success) {
      // logic for success
      // dispatch... etc
    }
  }, [success])

  // 에러 핸들링
  if (error) {
    return <div>Error handling</div>
  }

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
