// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slice/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,

  },
});

export default store;


