import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products.json`,
            transformResponse: (response) => {
                const data = Object.values(response)
                return data
            }
        }),
        getCart: builder.query({
            query: (localId) => `/users/${ localId }/cart.json`
        }),
        postCart: builder.mutation({
            query: (localId) => ({
                url: `/users/${ localId }/cart.json`,
                method: 'POST',
                body: cart
            })
        })
    })
})

export const { useGetProductsQuery, useGetCartQuery, usePostCartMutation } = shopApi