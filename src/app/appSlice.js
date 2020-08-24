import { createSlice } from '@reduxjs/toolkit';

import { APP_STATUS } from '../utils/constants';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: APP_STATUS.REGULAR,
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { setStatus } = appSlice.actions;

export const selectAppStatus = state => state.app.status;

export default appSlice.reducer;
