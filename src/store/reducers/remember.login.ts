import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  rememberMe: boolean
  rememberedEmail: string
  rememberedPassword: string
}

const initialState: InitialState = {
  rememberMe: false,
  rememberedEmail: '',
  rememberedPassword: '',
}

const rememberLoginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRememberMe(state, action: { payload: boolean }) {
      state.rememberMe = action.payload
    },
    setRememberedEmail(state, action: { payload: string }) {
      state.rememberedEmail = action.payload
    },
    setRememberedPassword(state, action: { payload: string }) {
      state.rememberedPassword = action.payload
    },
    clear: () => initialState,
  },
})

export default rememberLoginSlice
