import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Product/productSlice';
import blogReducer from './Blog/blogSlice';
import userSlice from './User/userSlice';
import cartSlice from "./Cart/cartSlice";

export const store =  configureStore({
    reducer: {
        productReducer: productReducer,
        blogReducer: blogReducer,
        userReducer: userSlice, 
        // cartReducer: cartSlice
    },
})