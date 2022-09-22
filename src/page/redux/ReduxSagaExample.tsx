import { useEffect } from 'react'
import counterSlice from 'src/store/reducers/counterSlice'
import { useAppDispatch, useAppSelector } from 'src/store/store'

const ReduxSagaExample = () => {
  const count = useAppSelector(state => state.counter.number)

  const dispatch = useAppDispatch()
  const increment = (payload: number) =>
    dispatch(counterSlice.actions.increase(payload))
  const decrement = (payload: number) =>
    dispatch(counterSlice.actions.decrease(payload))

  useEffect(() => {
    console.log('ReduxSagaExample')
  })
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => increment(1)}>increase</button>
      <button onClick={() => decrement(1)}>decrease</button>
    </div>
  )
}

export default ReduxSagaExample
