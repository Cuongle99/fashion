import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem("token"),
    localId: localStorage.getItem("localId"),
      adminToken: localStorage.getItem('adminToken'),
      adminLocalIdToken: localStorage.getItem('adminLocalId')
    
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.token = actions.payload.idToken;
      state.localId = actions.payload.localId;
      localStorage.setItem("token", actions.payload.idToken);
      localStorage.setItem("localId", actions.payload.localId);
      
    },
    logout: (state, actions) => {
      state.token = null;
      localStorage.removeItem('token')
      localStorage.removeItem('localId')
    },
    loginAdmin: (state, actions) => {
      state.adminToken = actions.payload.idToken;
      state.adminLocalId = actions.payload.localId;
      localStorage.setItem("adminToken", actions.payload.idToken);
      localStorage.setItem("adminLocalId", actions.payload.localId);
    },
  },
});

export const {login, logout, loginAdmin} = userSlice.actions;

export default userSlice.reducer;
