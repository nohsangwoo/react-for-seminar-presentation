import { useEffect } from 'react'
import counterSlice from '@src/store/reducers/counterSlice'
import { useAppDispatch, useAppSelector } from '@src/store/store'

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
      {/* redux saga에서 increase를 바라보고 있다가  increase가 작동하면 redux saga에 의하여 1초뒤 3감소하는 로직*/}
      <button onClick={() => increment(1)}>increase</button>
      <button onClick={() => decrement(1)}>decrease</button>
    </div>
  )
}

export default ReduxSagaExample
