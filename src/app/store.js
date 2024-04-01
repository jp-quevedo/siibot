import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authApi } from './services/auth'
import { avatarApi } from './services/avatar'
import { shopApi } from './services/shop'
import { itemsApi } from './services/items'
import { locationApi } from './services/location'
import { ordersApi } from './services/orders'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import itemReducer from '../features/item/itemSlice'
import orderReducer from '../features/order/orderSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        item: itemReducer,
        order: orderReducer,
        [ authApi.reducerPath ]: authApi.reducer,
        [ avatarApi.reducerPath ]: avatarApi.reducer,
        [ shopApi.reducerPath ]: shopApi.reducer,
        [ itemsApi.reducerPath ]: itemsApi.reducer,
        [ locationApi.reducerPath ]: locationApi.reducer,
        [ ordersApi.reducerPath ]: ordersApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
            .concat(
                authApi.middleware,
                avatarApi.middleware,
                shopApi.middleware,
                itemsApi.middleware,
                locationApi.middleware,
                ordersApi.middleware
            )
})

setupListeners(store.dispatch)