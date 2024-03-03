import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    email: '',
    idToken: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser: (state, action) => state = action.payload,
        clearUser: (state) => state = {email: '', idToken: ''}
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer