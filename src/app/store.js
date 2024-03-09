import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { eventsApi } from './services/events'
import { authApi } from './services/auth'
import { profPicApi } from './services/profPic'
import itemReducer from '../features/item/itemSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer,
        auth: authReducer,
        [ eventsApi.reducerPath ]: eventsApi.reducer,
        [ authApi.reducerPath ]: authApi.reducer,
        [ profPicApi.reducerPath ]: profPicApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(
                eventsApi.middleware,
                authApi.middleware,
                profPicApi.middleware
            )
})

setupListeners(store.dispatch)