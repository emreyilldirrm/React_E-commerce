import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
}

export const appSLice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export const { } = appSLice.actions

export default appSLice.reducer