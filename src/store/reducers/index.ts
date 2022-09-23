import { combineReducers } from 'redux'
import toggleSlice from './toggleSlice'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
import rememberLoginSlice from './remember.login'

const rootReducer = combineReducers({
  toggles: toggleSlice.reducer,
  counter: counterSlice.reducer,
  users: userSlice.reducer,
  rememberLoginSlice: rememberLoginSlice.reducer,
})

export default rootReducer
