import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productReducer from './slices/productSlices'
import basketReducer from './slices/basketSlices'

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})