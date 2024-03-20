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
            query: (localId) => `/users/${localId}/items.json`,
            transformResponse: (response) => {
                const data = Object.entries(response).map(item => {
                    return { id: item[0], ...item[1] }
                })
                return data
            }
        }),
        getItemsByCategory: builder.query({
            query: (localId, category) => `/users/${localId}/items.json?orderBy="category"&equalTo="${ category }"`,
            transformResponse: (response) => {
                const data = Object.entries(response).map(item => {
                    return { id: item[0], ...item[1] }
                })
                return data
            }
        }),
        getItemById: builder.query({
            query: (localId, id) => `/users/${localId}/items/${ id }.json`
        })
    })
})

export const { useGetCategoriesQuery, useGetItemsQuery, useGetItemsByCategoryQuery, useGetItemByIdQuery } = itemsApi