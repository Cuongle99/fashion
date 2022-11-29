// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// import {customAxios} from '../../config/api';

// const initialState = {
//     data: {}
// };


// export const getCartProduct = createAsyncThunk(
//     "products/getCartProduct",
//     async (arg, thunkApi) => {
//         try {
//             const token = thunkApi.getState().userReducer.token;
//             const userId = thunkApi.getState().userReducer.localId;
//             const res = await customAxios.get(
//                 `/cart/${userId}.json?auth=${token}`
//               );
//             return res.data;
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );

// export const addCart = createAsyncThunk(
//     "products/addCart",
//     async (arg, thunkApi) => {
//         try {
//             const token = thunkApi.getState().userReducer.token;
//             const userId = thunkApi.getState().userReducer.localId;
//             const res = await customAxios.put(
//                 `/cart/${userId}/${arg.id}.json?auth=${token}`,
//                 true
//             );
//             // thunkApi.dispatch(getCartProduct());
//             return res.data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );


// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {},
//     extraReducers : (builder) => {
//         builder
//         .addCase(addCart.pending, (state, action) => {})
//         .addCase(addCart.fulfilled, (state, action) => {
            
            
//         })
//         .addCase(addCart.rejected, (state, action) => {})
//         .addCase(getCartProduct.pending, (state, action) => {})
//         .addCase(getCartProduct.fulfilled, (state, action) => {

//             console.log(action.payload);
//             // if (action.payload.error) {
//             //     state.error = action.payload.error;
//             //   } else {
//             //     const products = action.payload;
//             //     state.data = products;
//             //   }
//         })
//         .addCase(getCartProduct.rejected, (state, action) => {})
//     }
// })


// export default cartSlice.reducer
