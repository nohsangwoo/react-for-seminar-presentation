import { ChangeEvent, useCallback, useEffect, useRef } from 'react'

import { useState } from 'react'
import { debounce } from 'lodash'
import { useFetchOrder } from './queries'
const ReactQueryHookWithQueries = () => {
  const [index, setIndex] = useState(1)
  const [iIndex, setIindex] = useState(1)
  const {
    data, // api로부터 받아온 데이터(실패시 retry옵션의 횟수 만큼 재시도함)
    dataUpdatedAt, // data가 업데이트된 시간
    error, // 에러가 발생했을 때, 에러 객체
    errorUpdatedAt, // error가 업데이트된 시간
    failureCount, // 실패 횟수
    isError, // error가 발생했는지 여부
    isFetched, // query가 fetch되었는지 여부
    isFetchedAfterMount, // query가 mount 이후에 fetch되었는지 여부
    isFetching, // query가 fetch되고 있는지 여부
    isPaused, // query가 일시정지 되었는지 여부
    isLoading, // query가 loading되고 있는지 여부
    isLoadingError, // query가 loading되는 도중 error가 발생했는지 여부
    isPlaceholderData, // query가 placeholderData를 사용하고 있는지 여부
    isPreviousData, // query가 이전 데이터를 사용하고 있는지 여부
    isRefetchError, // query가 refetch되는 도중 error가 발생했는지 여부
    isRefetching, // query가 refetch되고 있는지 여부
    isStale, // query가 stale 상태인지 여부 (staleTime이 지나지 않았는지 여부)
    isSuccess, // query가 성공적으로 fetch되었는지 여부
    refetch, // query를 refetch하는 함수
    remove, // query를 삭제하는 함수
    status, // query의 상태
    fetchStatus, // query의 fetch 상태
  } = useFetchOrder(['todos', index], index)

  console.log(
    'api로부터 받아온 데이터(실패시 retry옵션의 횟수 만큼 재시도함): ',
    !isLoading && !isError && data,
  )
  console.log('data가 업데이트된 시간: ', new Date(dataUpdatedAt))
  console.log('에러가 발생했을 때, 에러 객체: ', error)
  console.log('error가 업데이트된 시간: ', errorUpdatedAt)
  console.log('실패 횟수: ', failureCount)
  console.log('error가 발생했는지 여부: ', isError)
  console.log('query가 fetch되었는지 여부: ', isFetched)
  console.log('query가 mount 이후에 fetch되었는지 여부: ', isFetchedAfterMount)
  console.log('query가 fetch되고 있는지 여부: ', isFetching)
  console.log('query가 일시정지 되었는지 여부: ', isPaused)
  console.log('query가 loading되고 있는지 여부: ', isLoading)
  console.log(
    'query가 loading되는 도중 error가 발생했는지 여부: ',
    isLoadingError,
  )

  console.log(
    'query가 placeholderData를 사용하고 있는지 여부: ',
    isPlaceholderData,
  )

  console.log('query가 이전 데이터를 사용하고 있는지 여부: ', isPreviousData)

  console.log(
    'query가 refetch되는 도중 error가 발생했는지 여부: ',
    isRefetchError,
  )
  console.log('query가 refetch되고 있는지 여부: ', isRefetching)
  console.log('query가 stale 상태인지 여부: ', isStale)
  console.log('query가 성공적으로 fetch되었는지 여부: ', isSuccess)
  // console.log('query를 refetch하는 함수: ', refetch)
  // console.log('query를 삭제하는 함수: ', remove)
  console.log('query의 상태: ', status)
  console.log('query의 fetch 상태: ', fetchStatus)

  useEffect(() => {
    console.log('ReactQueryHooks example components updated!')
  })

  // debouncing example
  // HACK
  useEffect(() => {
    if (!!index) {
      refetch()
    }
  }, [index, refetch])

  const debouncedSetIndex = useRef(
    debounce(value => {
      setIndex(value)
    }, 3000),
  ).current

  useEffect(() => {
    return () => {
      debouncedSetIndex.cancel()
    }
  }, [debouncedSetIndex])

  const onChangeNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIindex(+e.target.value)
      debouncedSetIndex(e.target.value)
    },
    [debouncedSetIndex, setIindex],
  )
  //  end of debouncing example
  return (
    <div>
      <input onChange={onChangeNumber} value={iIndex} />
      <button onClick={() => refetch()}>refetch button</button>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : isError ? (
          <div>error</div>
        ) : (
          <div>
            <div>completed: {String(data.completed)}</div>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
            <div>userId: {data.userId}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReactQueryHookWithQueries
