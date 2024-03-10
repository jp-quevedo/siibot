import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { eventsApi } from './services/events'
import { authApi } from './services/auth'
import { userPicApi } from './services/userPic'
import { userLocApi } from './services/userLoc'
import itemReducer from '../features/item/itemSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer,
        auth: authReducer,
        [ eventsApi.reducerPath ]: eventsApi.reducer,
        [ authApi.reducerPath ]: authApi.reducer,
        [ userPicApi.reducerPath ]: userPicApi.reducer,
        [ userLocApi.reducerPath ]: userLocApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(
                eventsApi.middleware,
                authApi.middleware,
                userPicApi.middleware,
                userLocApi.middleware
            )
})

setupListeners(store.dispatch)