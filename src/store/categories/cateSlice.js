import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => ('UNDER CONSTRACTION'),
  },
};

const categoriesSlice = createSlice(options);

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
