import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ICategoryImage {
    publicid: string,
    url: string,
}
export interface ICategory {
    name: string,
    description: string,
    image: ICategoryImage
    _id: string,
}
export interface Icategory {
    category: ICategory,
    loading: boolean,
    error: string,

}

const initialState: Icategory = {
    category: {
        name: '',
        description: '',
        _id: '',
        image: {
            publicid: '',
            url: ''
        }
    },
    loading: true,
    error: '',

}
export const FETCH_ACTION = 'product/addCategory'
export const addNewCategory = createAsyncThunk(FETCH_ACTION,
    async (data: FormData, thunkAPI) => {
        try {
            console.log("Hey I am going t ssned the data", data)
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/category/addcategory',
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

const addCategory = createSlice({
    name: 'addCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewCategory.fulfilled, (state, action) => {
            state.category = action.payload.data
            state.loading = false;
            state.error = '';
        })
    }
})

export default addCategory.reducer;