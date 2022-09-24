import { getFetchTodos } from './../../page/reactQuery/AxiosUsage'
import {
  delay,
  all,
  fork,
  //  call,
  put,
  takeEvery,
  // takeLatest
} from 'redux-saga/effects'
import counterSlice from './../reducers/counterSlice'


function* watchIncrease() {
  yield takeEvery(counterSlice.actions.increase, function* () {
    yield delay(1000)
    yield getFetchTodos()
    yield put(counterSlice.actions.decrease(3))
  })
}

// take : 한번만 실행됨
// takeevery : 계속 반복 실행됨
// takelatest : 마지막만 실행됨
export function* counterSaga() {
  // yield takeLatest(DECREASE_SAGA_ASYNC, DECREASESAGA);
  yield all([fork(watchIncrease)])
}

