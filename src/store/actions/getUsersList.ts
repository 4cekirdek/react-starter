import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../core/_requests';

const getUsersList = createAsyncThunk('users/list', async (data: string, { rejectWithValue }) => {
  try {
    const response = await getUsers(data);
    return response;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export default getUsersList;
