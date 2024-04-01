import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: [ 'avatar' ],
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (localId) => `users/${ localId }.json`,
            providesTags: [ 'avatar' ]
        })
    })
})

export const { useGetUserQuery } = userApi