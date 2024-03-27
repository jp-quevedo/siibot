import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    createdAt: '',
    products: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, actions) =>{
            const existingProduct = state.products.some((product)=> product.id === actions.payload.id)
            if (!existingProduct) {
                state.products = [ ...actions.payload ]
            } else {
                state.products = state.products.map((product) => {
                    if (product.id === actions.payload.id) {
                        return { ...product }
                    }
                    return product
                })
            }
            state.total = state.products.reduce((acc, product)=> acc = acc + (product.price), 0)
        },
        deleteProduct: (state,actions) => {
            state.products = state.products.filter((product)=> product.id !== actions.payload)
            state.total = state.products.reduce((acc, product)=> acc = acc + (product.price), 0)
        },
        deleteCart: (state) => {
            state.total = 0
            state.products = []
        }
    }
})

export const  { addProduct, deleteProduct, deleteCart } = cartSlice.actions

export default cartSlice.reducer