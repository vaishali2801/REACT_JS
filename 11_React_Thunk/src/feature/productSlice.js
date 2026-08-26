
//Redux Thunk is middleware that allows us to perform **asynchronous** operations inside Redux.
//Normally, Redux actions are expected to contain plain data.

// But with Redux Thunk, we can dispatch a function instead of just an object.

import { createSlice } from "@reduxjs/toolkit";
import {fetchProduct} from "./productThunk";
const initialState = {
    products: [],
    loading: false,
    error: null
}

const product = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => { state.loading = true, state.error = null })
        .addCase(fetchProduct.fulfilled,(state,action)=>{state.loading =false,state.products = action.payload})
        .addCase(fetchProduct.rejected,(state,action)=>{state.loading = false,state.error = action.error.message})
    }
})

export default product.reducer;