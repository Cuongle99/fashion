import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customAxios } from "../../config/api";

const initialState = {
    data: {},
    favourites: null,
    cart: []
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
            
            if (res.data) {
                return res.data
            } else {
                return {}
            }
            
            // return res.data;
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
            const res = await customAxios.put(
                `/cart/${userId}/${arg.id}.json?auth=${token}`,
                arg
            );
            thunkApi.dispatch(getCartProduct())

            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteCart = createAsyncThunk(
    "products/deleteCart",
    async (arg, thunkApi) => {
        try {
            const token = thunkApi.getState().userReducer.token;
            const userId = thunkApi.getState().userReducer.localId;
            const res = await customAxios.delete(
                `/cart/${userId}/${arg}.json?auth=${token}`
            );
            thunkApi.dispatch(getCartProduct());
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const addCartCheck2 = createAsyncThunk(
    "products/addCart",
    async (arg, thunkApi) => {
        try {
            const token = thunkApi.getState().userReducer.token;
            const userId = thunkApi.getState().userReducer.localId;
            thunkApi.dispatch(getCartProduct())
            const res = await customAxios.get(
                `/cart/${userId}/${arg.id}.json?auth=${token}`
            );


            res.data.quantity = res.data.quantity + arg.quantity
            // thunkApi.dispatch(getCartProduct())


            
            const res2 = await customAxios.patch(
                `/cart/${userId}/${arg.id}.json?auth=${token}`, res.data
            );
            thunkApi.dispatch(getCartProduct())

            return res2.data;
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
        addCartCheck: (state, action) => {
            const datas = action.payload
            

            if(state.data) {
                const cloneState = JSON.parse(JSON.stringify(state.cart))
                const list = cloneState?.map(item => {
                    if(item.idCart === datas.id) {
                        item.cartQuantity+=datas.quantity
                    }
                    return item
                })
    
    
                state.cart = list
            }
            
        }
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
      

            })
            .addCase(addCart.rejected, (state, action) => {})



            .addCase(getCartProduct.pending, (state, action) => {})
            .addCase(getCartProduct.fulfilled, (state, action) => {

                // console.log(action.payload);

                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    const carts = action.payload;

                    const list = Object.keys(carts).map(item => {
                        return {...carts[item].data, idCart: carts[item].id , cartQuantity: carts[item].quantity}
                    })
                    state.cart = list
                }

            
            })
            .addCase(getCartProduct.rejected, (state, action) => {})
            // .addCase(addCartCheck2.pending, (state, action) => {})
            // .addCase(addCartCheck2.fulfilled, (state, action) => {

            //     if (action.payload.error) {
            //         state.error = action.payload.error;
            //     } else {
            //         const carts = action.payload;

            //         const list = Object.keys(carts).map(item => {
            //             return {...carts[item].data, idCart: carts[item].id , cartQuantity: carts[item].quantity}
            //         })
            //         state.cart = list
            //     }
            // })
            // .addCase(addCartCheck2.rejected, (state, action) => {})

            
            
    },
});

export const { favouriteProduct,addCartCheck } = productSlice.actions;

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
