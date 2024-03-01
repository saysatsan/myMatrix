/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  user: {},
  error: null,
};

export const userReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.createUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(thunks.createUser.rejected, (state, { error }) => {
      state.error = error.message;
    });
  },
});

export default userReducer.reducer;
