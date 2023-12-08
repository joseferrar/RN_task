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
    deleteTodoList: (state, {payload}) => {
      state.todo = state.todo.filter(todo => todo.id !== payload);
    },
  },
});

export const {getTodoList, addTodoList, deleteTodoList} = todoSlice.actions;
export default todoSlice.reducer;
