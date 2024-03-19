import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const locationApi = createApi({
    reducerPath: 'locationApi',
    tagTypes: ['location'],
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        putLocation: builder.mutation({
            query: ({ localId, locationFormatted }) => ({
                url: `/users/${ localId }/location.json`,
                method: 'PUT',
                body: locationFormatted
            }),
            invalidatesTags: ['location']
        }),
        getLocation: builder.query({
            query: (localId) => `/users/${ localId }/location.json`,
            providesTags: ['location']
        })
    })
})

export const { usePutLocationMutation, useGetLocationQuery } = locationApi