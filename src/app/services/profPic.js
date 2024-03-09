import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../database'

export const profPicApi = createApi({
    reducerPath: 'profPicApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        putProfPic: builder.mutation({
            query: ({ picture, localId }) => ({
                url: `profPic/${ localId }.json`,
                method: 'PUT',
                body: { picture: picture }
            })
        }),
        getProfPic: builder.query({
            query: (localId) => `profPic/${ localId }.json`
        })
    })
})

export const { usePutProfPicMutation, useGetProfPicQuery } = profPicApi