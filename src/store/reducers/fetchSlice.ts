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
  error: any
  isSuccess: boolean
  isLoading: boolean
  where: string
}

const initialState: InitialState = {
  todos: [],
  error: undefined,
  isSuccess: false,
  isLoading: false,
  where: '',
}

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    clear: () => initialState,
    setTodos(state, action: { payload: TodosType }) {
      state.todos = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
    setIsSuccess(state, action) {
      state.isSuccess = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setWhere(state, action) {
      state.where = action.payload
    },
  },
  extraReducers: {},
})

// create selector
export const selectTodos = (state: RootState) => state.fetchs.todos
export const AdvantageSelector = createSelector(selectTodos, value => value)

export default fetchSlice
