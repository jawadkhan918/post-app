import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Reducers
import logInReducer from './authSlice/logInSlice';
import listingReducer from './listingSlice/listingSlice';

const reducers = combineReducers({
  logInReducer,
  listingReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: [thunk],
});

export default store;
