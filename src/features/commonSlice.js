import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  modal: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showLoading: (state, {payload}) => {
      state.loading = payload;
    },
    showModal: (state, {payload}) => {
      state.modal = payload;
    },
  },
});

export const {showLoading, showModal} = commonSlice.actions;
export default commonSlice.reducer;
