import { combineReducers } from 'redux'
import counterSlice from './counterSlice'
import fetchSlice from './fetchSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  users: userSlice.reducer,
  fetchs: fetchSlice.reducer,
})

export default rootReducer
