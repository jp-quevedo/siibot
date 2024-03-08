import { createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../database'

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/categories.json'
        }),
        getItems: builder.query({
            query: () => '/items.json'
        }),
        getItemsByCategory: builder.query({
            query: (category) => `/items.json?orderBy="category"&equalTo="${ category }"`,
            transformResponse: (response) => {
                const data = Object.values(response)
                return data
            }
        }),
        getItemById: builder.query({
            query: (id) => `/items/${ id }.json`
        })
    })
})

export const { useGetCategoriesQuery, useGetItemsQuery ,useGetItemsByCategoryQuery, useGetItemByIdQuery } = eventsApi