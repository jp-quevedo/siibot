import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://identitytoolkit.googleapis.com/v1/'}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: 'accounts:signUp?key=AIzaSyDBy6XJvhcsrCB36jsQm0AVUs6cz5koVTg',
                method: 'POST',
                body: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: 'accounts:signInWithPassword?key=AIzaSyDBy6XJvhcsrCB36jsQm0AVUs6cz5koVTg',
                method: 'POST',
                body: user
            })
        })
    })
})

export const {useSignupMutation, useLoginMutation} = authApi