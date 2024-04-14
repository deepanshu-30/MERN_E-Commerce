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
    title: string,
    isFlashsale: boolean
}

const initialState: Iproduct = {
    product: [],
    loading: true,
    error: '',
    id: '2',
    heading: 'This Month',
    title: 'Best Selling Products',
    isFlashsale: false
}
export const FETCH_ACTION = 'product/getBestSellingProduct'
export const bestSellingProduct = createAsyncThunk(FETCH_ACTION,
    async (_, thunkAPI) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:5000/api/v1/product/getBestSellingProduct',
                withCredentials: true,
            })
            return response.data
        }
        catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error })
        }

    })

const getBestSellingProduct = createSlice({
    name: 'getBestSellingProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(bestSellingProduct.fulfilled, (state, action) => {
            state.product = action.payload.data
            state.loading = false;
            state.error = '';
        })
    }
})

export default getBestSellingProduct.reducer;