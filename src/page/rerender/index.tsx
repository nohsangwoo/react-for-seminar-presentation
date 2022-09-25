import { useEffect } from 'react'
import { useState } from 'react'

function Rerender() {
  const [num, setNum] = useState(0)

  useEffect(() => {}, [])
  return (
    <div>
      <h1>rerender issue</h1>
      <div>state: {num}</div>
      <button onClick={() => setNum(num + 1)}>rerender</button>
    </div>
  )
}

export default Rerender
