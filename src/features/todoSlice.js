import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodoList: (state, {payload}) => {
      state.todo = payload;
    },
    addTodoList: (state, {payload}) => {
      state?.todo?.push(payload);
    },
  },
});

export const {getTodoList, addTodoList} = todoSlice.actions;
export default todoSlice.reducer;
