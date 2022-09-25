import { useEffect } from 'react'
import counterSlice, {
  countNumSelector,
  notiAndNumSelector,
} from '@src/store/reducers/counterSlice'
import { useAppDispatch, useAppSelector } from '@src/store/store'
import { shallowEqual } from 'react-redux'

const Functional = () => {
  // 1. 기본적인 사용방법
  const count = useAppSelector(state => state.counter.number)

  // 2. 의존성 역전을 통한 selector 사용방법
  const countNum = useAppSelector(countNumSelector)

  // 3. reselect를 통한 selector 사용방법
  const { noti, num } = useAppSelector(notiAndNumSelector, shallowEqual)

  // 기본적인 dispatch 사용방법
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
      <div>
        <h2>basic</h2>
        <div>count: {count}</div>
      </div>
      <div>
        <h2>with createSelector</h2>
        <div>countNum: {countNum}</div>
      </div>
      <div>
        <h2>with createDraftSafeSelector</h2>
        <div>noti: {noti}</div>
        <div>num: {num}</div>
      </div>
      <button onClick={() => increment(1)}>increase</button>
      <button onClick={() => decrement(1)}>decrease</button>
    </div>
  )
}

export default Functional
