import { RootState } from '@src/store/store'
import { createSelector } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type TodosType = {
  completed: boolean
  id: number
  title: string
  userId: number
}[]
type InitialState = {
  todos: TodosType
}

const initialState: InitialState = {
  todos: [],
}

const fetcbSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    setTodos(state, action: { payload: TodosType }) {
      state.todos = action.payload
    },
  },
  extraReducers: {},
})

export const selectIsShowAdvantageBox = (state: RootState) =>
  state.toggles.isShowAdvantageBox
export const AdvantageSelector = createSelector(
  selectIsShowAdvantageBox,
  isShowAdvantageBox => isShowAdvantageBox,
)

export default fetcbSlice
