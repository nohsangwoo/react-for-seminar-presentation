import fetchSlice from '@src/store/reducers/fetchSlice'
import axios from 'axios'
import ReduxStore from '@src/store/store'

export const fetchApi = async <T extends string>(url: T): Promise<void> => {
  const { data } = await axios.get(url)
  ReduxStore.dispatch(fetchSlice.actions.setTodos(data))
}
