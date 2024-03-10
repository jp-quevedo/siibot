import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const userPicApi = createApi({
    reducerPath: 'userPicApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        putUserPic: builder.mutation({
            query: ({ picture, localId }) => ({
                url: `userPic/${ localId }.json`,
                method: 'PUT',
                body: { picture: picture }
            })
        }),
        getUserPic: builder.query({
            query: (localId) => `userPic/${ localId }.json`
        })
    })
})

export const { usePutUserPicMutation, useGetUserPicQuery } = userPicApi