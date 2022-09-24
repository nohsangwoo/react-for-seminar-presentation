import fetchSlice from '@src/store/reducers/fetchSlice'
import axios from 'axios'
import ReduxStore from '@src/store/store'

export const fetchApi = async <T extends string>(url: T): Promise<void> => {
  const { dispatch, getState } = ReduxStore
  try {
    dispatch(fetchSlice.actions.setIsLoading(false)) // 로딩
    dispatch(fetchSlice.actions.setIsSuccess(false)) // 펫칭 성공 여부
    const { data } = await axios.get(url) //  fetching
    dispatch(fetchSlice.actions.setTodos(data)) // 데이터 가져옴

    dispatch(fetchSlice.actions.setIsSuccess(true)) // // 펫칭 성공!
  } catch (e: any) {
    if (Object.keys(e).includes('message'))
      dispatch(fetchSlice.actions.setError(e.message)) // 에러시 핸들링

    dispatch(fetchSlice.actions.setIsSuccess(false)) // 펫칭 실패...
  } finally {
    dispatch(fetchSlice.actions.setIsLoading(true)) // 펫칭 성공을 했던 실패를 했던 로딩 끝
  }
}
