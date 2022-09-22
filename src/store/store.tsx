import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['socket', 'streams', 'toggles', 'tweets'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,

  // 추가 미들웨어를 적용하는방법(미들웨어 적용할때의 옵션설정도 같이한다)
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // }
    }).concat(sagaMiddleware),
  // .concat(logger),
  devTools: process.env.NODE_ENV === 'development',
})

// for typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga) // 루트 사가를 실행해 줍니다

export default store
