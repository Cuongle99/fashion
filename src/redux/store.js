import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Product/productSlice';
import blogReducer from './Blog/blogSlice';

export const store =  configureStore({
    reducer: {
        productReducer: productReducer,
        blogReducer: blogReducer
    },
})