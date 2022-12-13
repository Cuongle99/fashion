import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import {customAxios} from '../../config/api';

const initialState = {
    data: {}
};

export const sendEmail = createAsyncThunk(
    "client/postemail",
    async (arg, thunkApi) => {
        const email = {arg}
        const res = await customAxios.post(`/emails.json`, email);
        return res.data
    }
);


export const EmailSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
})


export default EmailSlice.reducer