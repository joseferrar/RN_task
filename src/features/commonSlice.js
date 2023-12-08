import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showLoading: (state, {payload}) => {
      state.loading = payload;
    },
  },
});

export const {showLoading} = commonSlice.actions;
export default commonSlice.reducer;
