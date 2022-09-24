import { useEffect } from 'react'
import counterSlice from '@src/store/reducers/counterSlice'
import { useAppDispatch, useAppSelector } from '@src/store/store'

const Functional = () => {
  const count = useAppSelector(state => state.counter.number)
  const dispatch = useAppDispatch()
  const increment = (payload: number) =>
    dispatch(counterSlice.actions.basicIncrease(payload))
  const decrement = (payload: number) =>
    dispatch(counterSlice.actions.basicDecrease(payload))

  useEffect(() => {
    // q: 이것이 increase, decrease를 사용할때마다 실행되게 하려면 어떻게 해야할까?
    console.log('functional component is rendered')
  }, [])

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => increment(1)}>increase</button>
      <button onClick={() => decrement(1)}>decrease</button>
    </div>
  )
}

export default Functional
