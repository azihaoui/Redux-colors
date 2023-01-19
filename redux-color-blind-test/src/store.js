import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './colorSlice'

export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
})