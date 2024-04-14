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
    product: IProductData,
    loading: boolean,
    error: string
}

const initialState: Iproduct = {
    product: {
        name: '',
        description: '',
        sku: '',
        category: '',
        images: [],
        price: 0,
        quantity: 0,
        isInStock: false,
        flashSale: false,
        priceDiscount: 0,
        bestSellingProduct: false,
        _id: '',
    },
    loading: true,
    error: '',

}
export const FETCH_ACTION = 'product/getProductById'
export const productById = createAsyncThunk(FETCH_ACTION,
    async (id: string, thunkAPI) => {

        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/product/getProductById',
                data: { id: id },
                withCredentials: true,

            })
            return response.data
        }
        catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error })
        }

    })

const getProductById = createSlice({
    name: 'getProductById',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productById.fulfilled, (state, action) => {
            state.product = action.payload.data
            state.loading = false;
            state.error = '';
        })
    }
})

export default getProductById.reducer;