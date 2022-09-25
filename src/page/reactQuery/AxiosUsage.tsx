import { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@src/store/store'
import _ from 'lodash'
import { fetchApi } from '@src/store/sagas/api/fetchApi'

// 컴포넌트 단에서 해결하지 않는다면 아래와 같이 어디선가 도메인으로 관리한다.
// 이전에 보통 이것을 redux-saga로 관리했다.
export const getFetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log('data!!: ', data)
  return data
}

const ReactQueryHook = () => {
  const isLoading = useAppSelector(state => state.fetchs.isLoading)
  const error = useAppSelector(state => state.fetchs.error)
  const isSuccess = useAppSelector(state => state.fetchs.isSuccess)
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.fetchs.todos)

  useEffect(() => {
    fetchApi('https://jsonplaceholder.typicode.com/todos', 'AxiosUasage.tsx')
    const fetchTodos = async (): Promise<void> => {}
    fetchTodos()
  }, [dispatch])

  useEffect(() => {
    if (isSuccess) {
      console.log('펫칭 성공!! ')
      // caching...
      // logic for isSuccess
      // dispatch... etc
    }

    // 원래는 아래와 같이 사용했었다.
    /* 
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
    fetchTodos() */
  }, [isSuccess])

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
