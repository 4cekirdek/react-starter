import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import getUsersList from '../actions/getUsersList';
import { UserState } from '../core/_models';

const initialState: UserState = {
  users: null,
  pagination: null,
  isLoading: true,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[]>) => {
      state.users = action.payload;
    },
    setLoading: state => {
      state.isLoading = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsersList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.pagination = action.payload.pagination;
      state.isLoading = false;
    });
    builder.addCase(getUsersList.rejected, (state, action) => {
      state.isLoading = false;
      state.users = null;
      state.error = action.payload;
    });
  },
});

export const { setUsers, setLoading } = usersSlice.actions;
export default usersSlice.reducer;
