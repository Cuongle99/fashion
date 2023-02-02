import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Product/productSlice';
import blogReducer from './Blog/blogSlice';
import userSlice from './User/userSlice';
import productSearchSlice from "./Product/productSearchSlice";
import EmailSlice from "./ClientEmail/EmailSlice";

export const store =  configureStore({
    reducer: {
        productReducer: productReducer,
        blogReducer: blogReducer,
        userReducer: userSlice, 
        searchReducer: productSearchSlice,
        emailReducer: EmailSlice,
    },
})