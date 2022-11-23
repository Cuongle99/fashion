import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {customAxios} from '../../config/api';

const initialState = {
    data: {}
};

export const getListProduct = createAsyncThunk(
    "products/getList",
    async (arg, thunkApi) => {
        // const token = thunkApi.getState().userReducer.token;
        const res = await customAxios.get(`/products.json`);
        return res.data
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getListProduct.pending, (state, action) => {
                // state.loading = true;
                // state.error = false;
            })
            .addCase(getListProduct.fulfilled, (state, action) => {
                const products = action.payload;
                // state.loading = false;
                state.data = products;
            })
            .addCase(getListProduct.rejected, (state, action) => {
                // state.loading = false;
                // state.error = true;
            })
    }

})


export default productSlice.reducer