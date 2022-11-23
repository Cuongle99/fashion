import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import {customAxios} from '../../config/api';

// const initialState = [
//     {
//         id: 1,
//         name: 'Convergent and divergent plate margins',
//         author: 'Admin',
//         date: '11/20/2022',
//         image: 'https://cdn.shopify.com/s/files/1/0678/4824/1469/files/blog1.jpg?v=1668848279',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites... Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In. Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum.'

//     },
//     {
//         id: 2,
//         name: 'What Are The Different Types of Wiper Blades',
//         author: 'Admin',
//         date: '11/20/2022',
//         image: 'https://cdn.shopify.com/s/files/1/0678/4824/1469/files/blog2.jpg?v=1668848279',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites... Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In. Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum.'

//     },
//     {
//         id: 3,
//         name: 'What Are The Different Types of Wiper Blades',
//         author: 'Admin',
//         date: '11/20/2022',
//         image: 'https://cdn.shopify.com/s/files/1/0678/4824/1469/files/blog3.jpg?v=1668848279',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites... Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In. Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum.'

//     },
//     {
//         id: 4,
//         name: 'What Are The Different Types of Wiper Blades',
//         author: 'Admin',
//         date: '11/20/2022',
//         image: 'https://cdn.shopify.com/s/files/1/0678/4824/1469/files/blog5.jpg?v=1668848279',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites... Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In. Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum.'

//     },
//     {
//         id: 5,
//         name: 'What Are The Different Types of Wiper Blades',
//         author: 'Admin',
//         date: '11/20/2022',
//         image: 'https://cdn.shopify.com/s/files/1/0678/4824/1469/files/blog4.jpg?v=1668848279',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites... Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In. Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis condimentum auctor sit dui. Urna pretium elit mauris cursus Curabitur at elit Vestibulum.'

//     },
    
// ]


const initialState = {
    data: {}
};

export const getListBlog = createAsyncThunk(
    "blogs/getList",
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
                // state.loading = true;
                // state.error = false;
            })
            .addCase(getListBlog.fulfilled, (state, action) => {
                const products = action.payload;
                // state.loading = false;
                state.data = products;
            })
            .addCase(getListBlog.rejected, (state, action) => {
                // state.loading = false;
                // state.error = true;
            })
    }
})


export default blogSlice.reducer