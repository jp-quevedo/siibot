import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { itemsApi } from './services/items'
import { authApi } from './services/auth'
import { avatarApi } from './services/avatar'
import { locationApi } from './services/location'
import authReducer from '../features/auth/authSlice'
import itemReducer from '../features/item/itemSlice'
import returnReducer from '../features/return/returnSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        item: itemReducer,
        return: returnReducer,
        [ authApi.reducerPath ]: authApi.reducer,
        [ itemsApi.reducerPath ]: itemsApi.reducer,
        [ avatarApi.reducerPath ]: avatarApi.reducer,
        [ locationApi.reducerPath ]: locationApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(
                authApi.middleware,
                itemsApi.middleware,
                avatarApi.middleware,
                locationApi.middleware
            )
})

setupListeners(store.dispatch)