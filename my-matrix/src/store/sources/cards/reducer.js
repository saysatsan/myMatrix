/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';
import actions from './actions';

const initialState = {
  cards: [],
  filter: '',
  loading: false,
  error: null,
  card: {},
};

export const cardReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      state.filter = payload;
    });
    builder.addCase(thunks.fetchCards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.fetchCards.fulfilled, (state, { payload }) => {
      state.cards = payload;
      state.loading = false;
    });
    builder.addCase(thunks.fetchCards.rejected, (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    });
    builder.addCase(thunks.fetchCardPage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.fetchCardPage.fulfilled, (state, { payload }) => {
      state.card = payload;
      state.loading = false;
    });
    builder.addCase(thunks.fetchCardPage.rejected, (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    });
    builder.addCase(thunks.changeCard.fulfilled, (state, { payload }) => {
      const { id, isFavorite } = payload.data;

      state.cards = state.cards.map((card) => (card.id === id ? { ...card, isFavorite } : card));
    });
  },
});

export default cardReducer.reducer;
