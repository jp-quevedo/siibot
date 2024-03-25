import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        value: {
            orderIdSelected: null
        }
    },
    reducers: {
        setOrderIdSelected: (state, action) => {
            state.value.orderIdSelected = action.payload
        }
    }
})

export const { setOrderIdSelected } = orderSlice.actions

export default orderSlice.reducer