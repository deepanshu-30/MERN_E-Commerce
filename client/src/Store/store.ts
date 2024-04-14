import { configureStore } from "@reduxjs/toolkit";
import userLogin from "./userSlice";
import userRegister from './userRegisterSlice'
import getFlashSaleProduct from './Product/getFlaseSaleProduct'
import getBestSellingProduct from "./Product/getBestSellingProduct";
import getProductById from "./Product/getProductById";
import getAllProduct from "./Product/getAllProduct";
import itemIncart from "./Cart/itemIncart";

const store = configureStore({
    reducer: {
        userLogin: userLogin,
        userRegister: userRegister,
        getFlashSaleProduct: getFlashSaleProduct,
        getBestSellingProduct: getBestSellingProduct,
        getProductById: getProductById,
        getAllProduct: getAllProduct,
        itemIncart: itemIncart

    }
})
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;