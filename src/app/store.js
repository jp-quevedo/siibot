import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { eventsApi } from './services/events'
import itemReducer from '../features/item/itemSlice'

export const store = configureStore({
    reducer: {
        itemReducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(eventsApi.middleware)
})

setupListeners(store.dispatch)