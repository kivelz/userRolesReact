import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { codeApi } from '../../features/ codes/codeSlice'

export const store = configureStore({
  reducer: {
    [codeApi.reducerPath]: codeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(codeApi.middleware),
})
setupListeners(store.dispatch)