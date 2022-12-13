import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import {customAxios} from '../../config/api';

const initialState = {
    data: []
};




export const productSearchSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getSearchProduct: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { getSearchProduct } = productSearchSlice.actions;
export default productSearchSlice.reducer