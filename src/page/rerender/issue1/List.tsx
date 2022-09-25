import React, { useState, useEffect } from 'react'

interface Props {
  createNumberList: () => number[]
}
const List = ({ createNumberList }: Props) => {
  const [item, setItems] = useState<number[]>([])
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setItems(createNumberList())
    setNumber(prev => prev + 1)
    console.log('updated List component!')
  }, [createNumberList])
  return (
    <div>
      <div style={{ border: '1px solid balck' }}>
        <h1>numList</h1>
        {item.map((num, index) => {
          return <div key={index}>{num}</div>
        })}
      </div>
      <div style={{ border: '1px solid balck' }}>
        <h1>number</h1>
        {number}
      </div>
    </div>
  )
}

export default List
