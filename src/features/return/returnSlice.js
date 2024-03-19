import { createSlice } from '@reduxjs/toolkit'

export const returnSlice = createSlice({
    name: 'return',
    initialState: {
        value: {
            user: 'userLogged',
            updatedAt: Date.now().toLocaleString(),
            total: null,
            items: []
        }
    },
    reducers: {
        addItem: (state, action) => {

        },
        removeItem: (state, action) => {

        },
        updateItem: (state, action) => {

        },
    }
})

export const { addItem, removeItem, updateItem } = returnSlice.actions

export default returnSlice.reducer