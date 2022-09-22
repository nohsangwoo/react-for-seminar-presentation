import { RootState } from '@src/store/store'
import { createSelector } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  isMovieOn: boolean
  isAlomodeon: boolean
  isModeSelect: boolean
  isScreenSharingActive: boolean
  isShowMyroom: boolean
  darkMode: boolean
  isShowAdvantageBox: boolean
}

const initialState: InitialState = {
  isMovieOn: false,
  isAlomodeon: true,
  isModeSelect: true,
  isScreenSharingActive: false,
  isShowMyroom: false,
  darkMode: false,
  isShowAdvantageBox: false,
}

const toggleSlice = createSlice({
  name: 'toggles',
  initialState,
  reducers: {
    setIsMovieon(state, action) {
      state.isMovieOn = action.payload
    },
    setIsAlomodeon(state, action) {
      state.isAlomodeon = action.payload
    },
    setIsModeSelect(state, action) {
      state.isModeSelect = action.payload
    },
    setIsScreenSharingActive(state, action) {
      state.isScreenSharingActive = action.payload
    },
    setShowMyRoom(state) {
      state.isShowMyroom = true
    },
    setDisableMyRoom(state) {
      state.isShowMyroom = false
    },
    setDisableDarkMode(state) {
      state.darkMode = false
    },
    setEnableDarkMode(state) {
      state.darkMode = true
    },
    setIsShowAdvantageBox(state, action: { payload: boolean }) {
      state.isShowAdvantageBox = action.payload
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

export default toggleSlice
