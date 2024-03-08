import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseAuthUrl, signupUrl, loginUrl } from '../database'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: signupUrl,
                method: 'POST',
                body: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: loginUrl,
                method: 'POST',
                body: user
            })
        })
    })
})

export const { useSignupMutation, useLoginMutation } = authApi