import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import commonSlice from './commonSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
    common: commonSlice,
  },
  devTools: true,
});

export default store;
