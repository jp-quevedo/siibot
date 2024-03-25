import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/categories.json'
        }),
        getItems: builder.query({
            query: (localId) => `/users/${ localId }/items.json`,
            transformResponse: (response) => {
                const data = Object.entries(response).map(item => {
                    return { id: item[0], ...item[1] }
                })
                return data
            }
        })
    })
})

export const { useGetCategoriesQuery, useGetItemsQuery } = itemsApi