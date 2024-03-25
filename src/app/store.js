import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { itemsApi } from './services/items'
import { ordersApi } from './services/orders'
import { authApi } from './services/auth'
import { avatarApi } from './services/avatar'
import { locationApi } from './services/location'
import authReducer from '../features/auth/authSlice'
import itemReducer from '../features/item/itemSlice'
import orderReducer from '../features/order/orderSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        item: itemReducer,
        order: orderReducer,
        [ authApi.reducerPath ]: authApi.reducer,
        [ itemsApi.reducerPath ]: itemsApi.reducer,
        [ ordersApi.reducerPath ]: ordersApi.reducer,
        [ avatarApi.reducerPath ]: avatarApi.reducer,
        [ locationApi.reducerPath ]: locationApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(
                authApi.middleware,
                itemsApi.middleware,
                ordersApi.middleware,
                avatarApi.middleware,
                locationApi.middleware
            )
})

setupListeners(store.dispatch)