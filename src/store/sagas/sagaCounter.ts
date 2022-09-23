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
// const INCREASESAGA = 'INCREASESAGA';
// const DECREASESAGA = 'DECREASESAGA';
// const INCREASE_SAGA_ASYNC = 'INCREASE_SAGA_ASYNC';
// const DECREASE_SAGA_ASYNC = 'DECREASE_SAGA_ASYNC';

// export const sagaincrease = () => {
//   return { type: INCREASESAGA };
// };
// export const sagadecrease = () => ({ type: DECREASESAGA });

// export const sagaincreaseAsync = () => ({ type: INCREASE_SAGA_ASYNC });

// export const sagadecreaseAsync = () => ({ type: DECREASE_SAGA_ASYNC });

export function* increaseSaga() {
  yield delay(2000) // 2초를 기다립니다
  // yield put(sagaincrease()); //put은 특정 액션을 디스패치 해줍니다.
  yield put(counterSlice.actions.increase)
}

export function* decreaseSaga() {
  yield delay(2000) // 2초를 기다립니다.
  yield put(counterSlice.actions.decrease(4)) //put은 특정 액션을 디스패치 해줍니다.
}

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
  // yield takeEvery(counterSlice.actions.decrease, decreaseSaga) // 모든 decreaseSaga
  // yield takeLatest(DECREASE_SAGA_ASYNC, DECREASESAGA);
  yield all([fork(watchIncrease)])
}

// function* watchLogin() {
//   yield takeLatest(LOG_IN, logIn);
// }

// export default function* counterSaga() {
//   yield all([fork(watchLogin)]);
// }
