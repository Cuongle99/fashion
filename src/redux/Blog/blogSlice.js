import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import {customAxios} from '../../config/api';

const initialState = {
    data: {}
};

export const getListBlog = createAsyncThunk(
    "blog/getList",
    async (arg, thunkApi) => {
        // const token = thunkApi.getState().userReducer.token;
        const res = await customAxios.get(`/blogs.json`);
        return res.data
    }
);


export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
            .addCase(getListBlog.pending, (state, action) => {
                
            })
            .addCase(getListBlog.fulfilled, (state, action) => {
                const blogs = action.payload;
                state.data = blogs;
            })
            .addCase(getListBlog.rejected, (state, action) => {
            })
    }
})


export default blogSlice.reducer