import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem("token"),
    localId: localStorage.getItem("localId")
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
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
