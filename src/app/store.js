import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authApi } from './services/auth'
import { eventsApi } from './services/events'
import itemReducer from '../features/item/itemSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer,
        auth: authReducer,
        [ eventsApi.reducerPath ]: eventsApi.reducer,
        [ authApi.reducerPath ]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(eventsApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)