import { createSlice } from '@reduxjs/toolkit'
import { loginEmail_loginEmail_userInfo } from '@/__generated__/loginEmail'

type InitialState = {
  userInfo?: loginEmail_loginEmail_userInfo | null
  isLogin: boolean
  isConfirmed: boolean
  isVerify: boolean
}

const initialState: InitialState = {
  userInfo: undefined,
  isLogin: false,
  isConfirmed: false,
  isVerify: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(
      state,
      action: { payload: loginEmail_loginEmail_userInfo | null },
    ) {
      state.userInfo = action.payload
    },
    setLogin(state) {
      state.isLogin = true
    },
    setLogout(state) {
      state.isLogin = false
    },
    setIsConfirmed(state, action: { payload: boolean }) {
      state.isConfirmed = action.payload
    },
    setVerify(state, action: { payload: boolean }) {
      state.isVerify = action.payload
    },
    clear: () => initialState,
  },
})

export default userSlice
