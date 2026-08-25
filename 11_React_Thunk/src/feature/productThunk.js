import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "product/getAllProduct",

    async () => {

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok){
            return console.log("fetch product failed");
        }

        const data = await res.json();

        return data;
    }
);