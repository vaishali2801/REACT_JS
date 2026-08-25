
//Redux Thunk is middleware that allows us to perform **asynchronous** operations inside Redux.
//Normally, Redux actions are expected to contain plain data.

// But with Redux Thunk, we can dispatch a function instead of just an object.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:{

    },
    loading:false,
    error:null
}

const product = createSlice ({
    name:"product",
    initialState,
    reducers:{

    }
})

export default product.reducer;