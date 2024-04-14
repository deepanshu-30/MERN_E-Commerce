import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Icategory {

    loading: boolean,
    error: string,

}

const initialState: Icategory = {
    loading: true,
    error: '',

}
export const FETCH_ACTION = 'product/addCategory'
export const updateQuantityCsv = createAsyncThunk(FETCH_ACTION,
    async (data: FormData, thunkAPI) => {
        try {
            console.log("Hey I am going t ssned the data", data)
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/product/updateQuantityCsv',
                withCredentials: true,
                data: data
            })
            console.log(response)
            return response.data
        }
        catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error })
        }

    })

const updateQuantityProduct = createSlice({
    name: 'updateQuabityPdoduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateQuantityCsv.fulfilled, (state, action) => {

            state.loading = false;
            state.error = '';
        })
    }
})

export default updateQuantityProduct.reducer;