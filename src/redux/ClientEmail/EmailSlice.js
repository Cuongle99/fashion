import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import {customAxios} from '../../config/api';

const initialState = {
    data: {}
};

export const getListEmailClient = createAsyncThunk(
    "client/getListEmail",
    async (arg, thunkApi) => {
        const res = await customAxios.get(`/emails.json`);
        return res.data
    }
);

export const sendEmail = createAsyncThunk(
    "client/postemail",
    async (arg, thunkApi) => {
        try {
            const res = await customAxios.post(`/emails.json`, {arg});
            thunkApi.dispatch(getListEmailClient());
            return res.data
        } catch (error) {
            console.log(error);
        }
        
    }
);


export const EmailSlice = createSlice({
    name: 'emails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListEmailClient.pending, (state, action) => {})
            .addCase(getListEmailClient.fulfilled, (state, action) => {
                const listEmail = action.payload;
                state.data = listEmail;
            })
            .addCase(getListEmailClient.rejected, (state, action) => {})
    }
})


export default EmailSlice.reducer