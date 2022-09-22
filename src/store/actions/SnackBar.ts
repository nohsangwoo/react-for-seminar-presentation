import * as types from './ActionTypes'

export const showSnackbar = (msg: any) => ({
  type: types.SNACKBAR_SHOW,
  msg,
})

export const closeSnackbar = () => ({
  type: types.SNACKBAR_CLOSE,
})
