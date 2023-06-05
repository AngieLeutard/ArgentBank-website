import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import userSlice from './reducers/userReducer'

const persistConfigUser = {
  key: 'user',
  version: 1,
  storage,
}

export default configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {
    user: persistReducer(persistConfigUser, userSlice)
  }
})