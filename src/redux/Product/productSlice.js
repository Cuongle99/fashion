import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customAxios } from "../../config/api";

const initialState = {
    data: {},
    favourites: null,
    cart: null
};

export const getListProduct = createAsyncThunk(
    "products/getList",
    async (arg, thunkApi) => {
        try {
            const res = await customAxios.get(`/products.json`);
            // thunkApi.dispatch(getListFavourite())
            thunkApi.dispatch(getCartProduct())
             
             
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);



export const getCartProduct = createAsyncThunk(
    "products/getCartProduct",
    async (arg, thunkApi) => {
        try {
            const token = thunkApi.getState().userReducer.token;
            const userId = thunkApi.getState().userReducer.localId;
            const res = await customAxios.get(
                `/cart/${userId}.json?auth=${token}`
            );

            
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const addCart = createAsyncThunk(
    "products/addCart",
    async (arg, thunkApi) => {
        try {
            const token = thunkApi.getState().userReducer.token;
            const userId = thunkApi.getState().userReducer.localId;
            thunkApi.dispatch(getCartProduct())
            const res = await customAxios.put(
                `/cart/${userId}/${arg.id}.json?auth=${token}`,
                arg
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const favouriteProducts = createAsyncThunk(
    "products/addFavourite",
    async (arg, thunkApi) => {
        try {
            const token = thunkApi.getState().userReducer.token;
            const userId = thunkApi.getState().userReducer.localId;
            const res = await customAxios.put(
                `/favourite/${userId}/${arg}.json?auth=${token}`,
                true
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);



export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        favouriteProduct: (state, action) => {
            const id = action.payload;
            state.data[id].isFavourite = !state.data[id].isFavourite;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListProduct.pending, (state, action) => {})
            .addCase(getListProduct.fulfilled, (state, action) => {
                const products = action.payload;
                state.data = products;
            })
            .addCase(getListProduct.rejected, (state, action) => {})
            .addCase(addCart.pending, (state, action) => {})
            .addCase(addCart.fulfilled, (state, action) => {
                const cartItem = action.payload;
                const cloneState = JSON.parse(JSON.stringify(state.cart));
                console.log(cloneState);
                const index = cloneState?.findIndex(item => item.idCart === cartItem.id)
                if(index >= 0) {
                
                }

            })
            .addCase(addCart.rejected, (state, action) => {})



            .addCase(getCartProduct.pending, (state, action) => {})
            .addCase(getCartProduct.fulfilled, (state, action) => {

                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const carts = action.payload;

                    if (carts) {
                        const listCarts = Object.keys(
                            carts
                        ).map((item) => {
                            return {...state.data[item], idCart: item}
                        });

                        state.cart = listCarts;
                    }
                }
            })
            .addCase(getCartProduct.rejected, (state, action) => {})

            
            
    },
});

export const { favouriteProduct } = productSlice.actions;

export default productSlice.reducer;



// export const favouriteDel = createAsyncThunk(
//     "products/delFavourite",
//     async (arg, thunkApi) => {
//         try {
//             const token = thunkApi.getState().userReducer.token;
//             const userId = thunkApi.getState().userReducer.localId;
//             const res = await customAxios.delete(
//                 `/favourite/${userId}/${arg}.json?auth=${token}`
//             );
//             return res.data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );

// export const getListFavourite = createAsyncThunk(
//     "products/getListFavourite",
//     async (arg, thunkApi) => {
//         try {
//             const token = thunkApi.getState().userReducer.token;
//             const userId = thunkApi.getState().userReducer.localId;
//             const res = await customAxios.get(
//                 `/favourite/${userId}.json?auth=${token}`
//             );

            
//             return res.data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );
