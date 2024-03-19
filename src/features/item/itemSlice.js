import { createSlice } from '@reduxjs/toolkit'
import { baseUrl } from '../../utils/data/database'
import { info } from '../../utils/data/items'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        value: {
            categories: baseUrl + '/categories.json',
            categorySelected: '',
            items: info,
            itemsFilterByCategory: '',
            itemIdSelected: null
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload
            const itemsFilter = info.filter(item => item.category === categorySelected)
            state.value.categorySelected = categorySelected
            state.value.itemsFilterByCategory = itemsFilter
        },
        setItemIdSelected: (state, action) => {
            state.value.itemIdSelected = action.payload
        },
        setItem: (state, action) => state = action.payload
    }
})

export const { setCategorySelected, setItemIdSelected, setItem } = itemSlice.actions

export default itemSlice.reducer