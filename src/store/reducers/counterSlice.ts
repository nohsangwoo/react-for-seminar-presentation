import ReduxStore from '@src/store/store'
import {
  createDraftSafeSelector,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { increaseAsync, decreaseAsync } from '../actions/counterActions'
import { RootState } from '../store'
type InitialState = {
  number: number
  noticount: number
  dummyNumber: number[]
}

const initialState: InitialState = {
  number: 0,
  noticount: 0,
  dummyNumber: Array(100)
    .fill(undefined)
    .map((v, i) => (i + 1) * 100),
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    basicIncrease(state, action) {
      state.number = state.number + action.payload
    },
    basicDecrease(state, action) {
      state.number = state.number - action.payload
    },
    increase(state, action) {
      state.number = state.number + action.payload
    },
    decrease(state, action) {
      state.number = state.number - action.payload
    },
    totalCountDecrease(state, action) {
      state.noticount = state.noticount - 1
    },
    setNotiListCount(state, action) {
      state.noticount = action.payload
    },
  },
  extraReducers: builder =>
    builder
      .addCase(increaseAsync.pending, (state, action) => {})
      .addCase(increaseAsync.fulfilled, (state, action) => {})
      .addCase(increaseAsync.rejected, (state, action) => {})
      .addCase(decreaseAsync.pending, (state, action) => {})
      .addCase(decreaseAsync.fulfilled, (state, action) => {})
      .addCase(decreaseAsync.rejected, (state, action) => {})

      // 일종의 스위치 미들웨어
      .addMatcher(
        action => {
          return action.type.includes('/pending')
        },
        (state, action) => {
          console.log('add matcher activate on pending function')
        },
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {}),
})

export default counterSlice

const numSelect = (state: RootState) => state.counter.number
const notiCountSelect = (state: RootState) => state.counter.noticount

export const countNumSelector = createSelector(numSelect, state => state)

export const notiAndNumSelector = createDraftSafeSelector(
  notiCountSelect,
  numSelect,
  (notiCount, num) => ({ noti: notiCount, num: num }),
)

//
// export const notiAndNumSelector2 = createSelector(
//   notiCountSelect,
//   numSelect,
//   (notiCount, num) => ({ noti: notiCount, num: num }),
//   {
//     // New in 4.1: Pass options through to the built-in `defaultMemoize` function
//     memoizeOptions: {
//       equalityCheck: (a, b) => a === b,
//       maxSize: 10,
//       resultEqualityCheck: shallowEqual,
//     }, // from reselector
//   },
// )
