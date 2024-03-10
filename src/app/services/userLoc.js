import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const userLocApi = createApi({
    reducerPath: 'profPicApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        putUserLoc: builder.mutation({
            query: ({ localId, locationFormatted }) => ({
                url: `/userLoc/${ localId }.json`,
                method: 'PUT',
                body: locationFormatted
            })
        }),
        getUserLoc: builder.query({
            query: (localId) => `/userLoc/${ localId }.json`
        })
    })
})

export const { usePutUserLocMutation, useGetUserLocQuery } = userLocApi