import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: (localId) => `/users/${localId}/orders.json`,
            transformResponse: (response) => {
                const data = Object.entries(response).map(item => {
                    return { id: item[0], ...item[1] }
                })
                return data
            }
        }),
        postOrder: builder.mutation({
            query: (localId) => ({
                url: `/users/${localId}/items.json`,
                method: 'POST',
                body: order
            })
        })
    })
})

export const { useGetOrdersQuery ,usePostOrderMutation } = ordersApi