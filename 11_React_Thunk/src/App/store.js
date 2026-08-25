
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../feature/productSlice";

const store = configureStore({
    reducer:{
        product:productSlice
    }
})

export default store;