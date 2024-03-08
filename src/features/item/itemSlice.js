import { createSlice } from '@reduxjs/toolkit'

import allCategories from '../../utils/data/categories.json'
import allItems from '../../utils/data/itemsData.json'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        value: {
            categories: allCategories,
            categorySelected: '',
            items: allItems,
            itemsFilterByCategory: [],
            itemIdSelected: null
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload
            const itemsFilter = allItems.filter(item => item.category === categorySelected)
            state.value.categorySelected = categorySelected
            state.value.itemsFilterByCategory = itemsFilter
        },
        setItemIdSelected: (state, action) => {
            state.value.itemIdSelected = action.payload
        }
    }
})

export const { setCategorySelected, setItemIdSelected } = itemSlice.actions

export default itemSlice.reducer