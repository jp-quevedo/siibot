import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    idToken: '',
    localId: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => state = action.payload,
        clearUser: (state) => state = {
            email: '',
            idToken: '',
            localId: ''
        }
    }
})

export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer