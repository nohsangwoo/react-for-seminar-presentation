import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Whyneedcodesplitting = () => {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(false)

  //  문제점 : createNumberList 함수가 매번 새로 생성되어서 List 컴포넌트가 불필요하게 렌더링 된다.
  const createNumberList = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const onHandleToggle = () => {
    setToggle(prev => !prev)
  }

  const [item, setItems] = useState<number[]>([])
  const [updateNumber, setUpdateNumber] = useState(0)

  useEffect(() => {
    setItems(createNumberList())
    setUpdateNumber(prev => prev + 1)
    console.log('updated List component!')
  }, [createNumberList])

  return (
    <div>
      <input onChange={e => setNumber(+e.target.value)} value={number} />
      {/* List Show */}
      <div>
        <div style={{ border: '1px solid balck' }}>
          <h1>numList</h1>
          {item.map((num, index) => {
            return <div key={index}>{num}</div>
          })}
        </div>
        <div style={{ border: '1px solid balck' }}>
          <h1>number</h1>
          {updateNumber}
        </div>
      </div>
      <div>toggle2 state : {toggle}</div>
      <button onClick={onHandleToggle}>toggle</button>
    </div>
  )
}

export default Whyneedcodesplitting
