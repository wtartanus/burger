import { createSlice } from '@reduxjs/toolkit';

import { setStatus } from '../../app/appSlice';
import { postBurger } from '../../app/api';
import { assertResponseIsSuccessfull } from '../../utils/utils';
import { APP_STATUS } from '../../utils/constants';

const initialState = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meet: 0,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    incrementIngridient: (state, { payload }) => {
      state[payload] += 1;
    },
    decrementIngridient: (state, { payload }) => {
      state[payload] -= 1;
    },
    reset: () => (
      { ...initialState }
    )
  },
});

export const {
  incrementIngridient,
  decrementIngridient,
} = burgerSlice.actions;

export const saveOrder = data => async dispatch => {
  const { reset } = burgerSlice.actions;
  try {
    dispatch(setStatus(APP_STATUS.LOADING));

    const response = await postBurger(data);

    assertResponseIsSuccessfull(response);

    dispatch(setStatus(APP_STATUS.REGULAR));
    dispatch(reset());
  } catch (e) {
    dispatch(setStatus(APP_STATUS.ERROR));
  }
};

export const selectBurger = state => state.burger;

export default burgerSlice.reducer;
