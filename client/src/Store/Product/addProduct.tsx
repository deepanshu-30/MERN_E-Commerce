import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IProductImage {
    publicid: string,
    url: string,
}
export interface IProductData {
    name: string,
    description: string,
    sku: string,
    category: string,
    images: IProductImage[],
    price: number,
    quantity: number,
    isInStock: boolean,
    flashSale: boolean,
    priceDiscount: number,
    bestSellingProduct: boolean,
    _id: string,
}
export interface Iproduct {
    product: IProductData[],
    loading: boolean,
    error: string,
    id: string,
    heading: string,
    title: string
    isFlashsale: boolean
}

const initialState: Iproduct = {
    product: [],
    loading: true,
    error: '',
    id: '3',
    heading: 'Our Products',
    title: 'Explore Our Products',
    isFlashsale: false
}
export const FETCH_ACTION = 'product/addProduct'
export const addNewProduct = createAsyncThunk(FETCH_ACTION,
    async (data: FormData, thunkAPI) => {
        try {
            console.log("Hey I am going t ssned the data", data)
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/product/createproduct',
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

const addProduct = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewProduct.fulfilled, (state, action) => {
            state.product = action.payload.data
            state.loading = false;
            state.error = '';
        })
    }
})

export default addProduct.reducer;