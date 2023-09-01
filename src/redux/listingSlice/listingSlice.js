import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {getList} from '../../services/api/methods/listing';

export const fetchList = createAsyncThunk(
  'listing/fetchList',
  async payload => {
    const {endPoint, stopLoader} = payload;
    try {
      let response = await getList(endPoint);
      stopLoader();
      return response?.data;
    } catch (error) {
      stopLoader();
      throw error.message;
    }
  },
);

const listingSlice = createSlice({
  name: 'listing',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    reset: (state, action) => {
      (state.userData = null), (state.loading = false);
    },
  },
  //================= Login =================//
  extraReducers: builder => {
    builder.addCase(fetchList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchList.rejected, (state, action) => {
      state.loading = false;
      Alert.alert('', action?.error?.message);
    });
  },
});
// Selector export
export const listingReducer = state => state.listingReducer;
export const {reset} = listingSlice.actions;
export default listingSlice.reducer;
