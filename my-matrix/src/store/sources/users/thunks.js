import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/services';
import { moduleName } from './constants';

const createUser = createAsyncThunk(`${moduleName}/createUser`, async (params) => {
  const response = await api.usersData.post(params);

  return response;
});

export default { createUser };
