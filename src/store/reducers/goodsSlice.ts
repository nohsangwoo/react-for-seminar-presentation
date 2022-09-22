import { createSlice } from '@reduxjs/toolkit'
import { getUserGoods_getUserGoods_goods } from '@src/__generated__/getUserGoods'

type InitialState = {
  goods: getUserGoods_getUserGoods_goods[]
  wasPurchased: boolean
}

const initialState: InitialState = {
  goods: [],
  wasPurchased: false,
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload
    },
    clear: () => initialState,
  },
})

export default goodsSlice
