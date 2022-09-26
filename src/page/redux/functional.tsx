import { useEffect } from 'react'
import counterSlice, {
  countNumSelector,
  notiAndNumSelector,
} from '@src/store/reducers/counterSlice'
import { RootState, useAppDispatch, useAppSelector } from '@src/store/store'
import { shallowEqual, useSelector } from 'react-redux'

const Functional = () => {
  // 1. 기본적인 사용방법
  // const count = useSelector((state: RootState) => state.counter.number)
  // # 하지만 state의 type을 매번 적는게 귀찮다.
  // # 그래서 아래와 같이 type을 지정해주면 된다.
  // 하지만 유연하지 못한 방법이다.
  const count = useAppSelector(state => state.counter.number)

  // 2. 의존성을 해결해주기 위한 createSelector 사용방법
  // redux-toolkit에서 제안하는 일종의 의존관계 역전 원칙 적용방법(DIP)
  const countNum = useAppSelector(countNumSelector)
  // 만약 ..store에서 끌어오는 값이 많다면?
  // const countNum2 = useAppSelector(countNumSelector)
  // const countNum3 = useAppSelector(countNumSelector)
  // const countNum4 = useAppSelector(countNumSelector)
  // ...

  // pre 3. 서로에게 영향을 주며 재 할당되는 경우
  const { number, noticount } = useAppSelector(state => state.counter)

  // 3. reselect를 통한 selector 사용방법
  const { noti, num } = useAppSelector(notiAndNumSelector, shallowEqual)

  // 기본적인 dispatch 사용방법
  const dispatch = useAppDispatch()

  const increaseNumber = (payload: number) =>
    dispatch(counterSlice.actions.basicIncrease(payload))
  const decreaseNumber = (payload: number) =>
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
      <button onClick={() => increaseNumber(1)}>increase</button>
      <button onClick={() => decreaseNumber(1)}>decrease</button>
    </div>
  )
}

export default Functional
