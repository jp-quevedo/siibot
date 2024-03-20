import { createSlice } from '@reduxjs/toolkit'
import { baseUrl } from '../../utils/data/database'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        value: {
            categories: baseUrl + '/categories.json',
            categorySelected: '',
            itemIdSelected: null
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload
            state.value.categorySelected = categorySelected
        },
        setItemIdSelected: (state, action) => {
            state.value.itemIdSelected = action.payload
        }
    }
})

export const { setCategorySelected, setItemIdSelected } = itemSlice.actions

export default itemSlice.reducer