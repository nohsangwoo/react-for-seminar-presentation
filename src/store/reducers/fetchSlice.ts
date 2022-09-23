import { RootState } from '@src/store/store'
import { createSelector } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type TodosType = {
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

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    setTodos(state, action: { payload: TodosType }) {
      state.todos = action.payload
    },
    clear: () => initialState,
  },
  extraReducers: {},
})

// create selector
export const selectTodos = (state: RootState) => state.fetchs.todos
export const AdvantageSelector = createSelector(selectTodos, value => value)

export default fetchSlice
