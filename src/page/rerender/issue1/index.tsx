import { useCallback } from 'react'
import { useState } from 'react'
import List from './List'

const Issue1 = () => {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(false)

  //  문제점 : createNumberList 함수가 매번 새로 생성되어서 List 컴포넌트가 불필요하게 렌더링 된다.
  const createNumberList = () => {
    return [number, number + 1, number + 2]
  }

  //   해결책 : useCallback을 사용하여 createNumberList 함수를 캐싱한다.
  //   const createNumberList = useCallback(() => {
  //     return [number, number + 1, number + 2]
  //   }, [number])

  const onHandleToggle = () => {
    setToggle(prev => !prev)
  }

  return (
    <div>
      <input onChange={e => setNumber(+e.target.value)} value={number} />
      <List createNumberList={createNumberList} />
      <div>toggle2 state : {toggle}</div>
      <button onClick={onHandleToggle}>toggle</button>
    </div>
  )
}

export default Issue1
