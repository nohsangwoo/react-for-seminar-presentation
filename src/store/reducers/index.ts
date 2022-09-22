import { combineReducers } from 'redux'
import toggleSlice from './toggleSlice'
import counterSlice from './counterSlice'
import someOtherSlice from './someOtherSlice'
import userSlice from './userSlice'
import snackbarSlice from './snackBarSlice'
import rememberLoginSlice from './remember.login'
import socketSlice from './socketSlice'
// import postSlice from "./postSlice";
// import { all } from "redux-saga/effects";
// import sagaCounter, { counterSaga } from "./sagacounter";

const rootReducer = combineReducers({
  toggles: toggleSlice.reducer,
  counter: counterSlice.reducer,
  somesome: someOtherSlice.reducer,
  users: userSlice.reducer,
  rememberLoginSlice: rememberLoginSlice.reducer,
  snackbar: snackbarSlice.reducer,
  socket: socketSlice.reducer,
})

export default rootReducer
