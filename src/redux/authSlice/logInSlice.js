import {createSlice} from '@reduxjs/toolkit';

const logInSlice = createSlice({
  name: 'logIn',
  initialState: {
    userData: null,
    loading: false,
    error: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state.userData = state.userData = {
        ...action.payload.user,
        rememberMe: true,
      };
    },
    reset: (state, action) => {
      state.userData = null;
      state.loading = false;
      state.error = '';
    },
  },
});

export const logInReducer = state => state.logInReducer;
export const {reset, updateUser} = logInSlice.actions;
export default logInSlice.reducer;
