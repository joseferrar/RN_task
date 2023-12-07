import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  devTools: true,
});

export default store;
