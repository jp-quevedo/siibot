import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../../utils/data/database'

export const avatarApi = createApi({
    reducerPath: 'avatarApi',
    tagTypes: [ 'avatar' ],
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        putAvatar: builder.mutation({
            query: ({ picture, localId }) => ({
                url: `users/${ localId }/avatar.json`,
                method: 'PUT',
                body: { picture: picture }
            }),
            invalidatesTags: [ 'avatar' ]
        }),
        getAvatar: builder.query({
            query: (localId) => `users/${ localId }/avatar.json`,
            providesTags: [ 'avatar' ]
        })
    })
})

export const { usePutAvatarMutation, useGetAvatarQuery } = avatarApi