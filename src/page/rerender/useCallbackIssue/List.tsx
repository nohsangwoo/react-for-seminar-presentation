import React, { useState, useEffect } from 'react'

interface Props {
  createNumberList: () => number[]
}
const List = ({ createNumberList }: Props) => {
  const styles = {
    wrapper: {
      color: 'white',
      background: 'teal',
      padding: '.375rem .75rem',
      border: '1px solid teal',
      borderRadius: '.25rem',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  }

  const [item, setItems] = useState<number[]>([])
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setItems(createNumberList())
    setNumber(prev => prev + 1)
    console.log('updated List component!')
  }, [createNumberList])
  return (
    <div>
      <div style={styles.wrapper}>
        <h1>numList</h1>
        {item.map((num, index) => {
          return <div key={index}>{num}</div>
        })}
      </div>
      <div style={styles.wrapper}>
        <h1>number</h1>
        {number}
      </div>
    </div>
  )
}

export default List
