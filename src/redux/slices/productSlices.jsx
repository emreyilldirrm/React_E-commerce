import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("getallProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    // console.log("dönen data", response.data)
    return response.data

})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setselectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
    }
})

export const { setselectedProduct } = productsSlice.actions

export default productsSlice.reducer