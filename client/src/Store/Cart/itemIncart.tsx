// productsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    products: [],
    status: 'idle',
    error: '',
};

// Create a thunk to fetch the products from localStorage
export const fetchProductsFromLocalStorage = createAsyncThunk(
    'products/fetchProductsFromLocalStorage',
    async () => {
        const productsString = localStorage.getItem('products');
        return productsString ? JSON.parse(productsString) : [];
    }
);

// Create a slice for products
const itemIncart = createSlice({
    name: 'itemIncart',
    initialState,
    reducers: {
        // Other reducers can go here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsFromLocalStorage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsFromLocalStorage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProductsFromLocalStorage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action?.error?.message ?? 'Not found';
            });
    },
});

// Export the reducer and actions
export const { } = itemIncart.actions;

export default itemIncart.reducer;
