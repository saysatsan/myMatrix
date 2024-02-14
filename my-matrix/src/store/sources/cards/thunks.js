import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/services';
import { moduleName } from './constants';

const fetchCards = createAsyncThunk(`${moduleName}/fetchCards`, async () => {
  const response = await api.taroCards.get();

  return response;
});

const fetchCardPage = createAsyncThunk(`${moduleName}/fetchCardPage`, async (id) => {
  const response = await api.taroCard.get(id);

  return response;
});

const changeCard = createAsyncThunk(`${moduleName}/changeCard`, async ({ id, params }) => {
  const response = await api.taroCard.put(id, params);

  return { data: response.data, id };
});

export default { fetchCards, fetchCardPage, changeCard };
