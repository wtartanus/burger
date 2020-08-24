import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import burgerReducer from '../features/burgerCreator/burgerSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    burger: burgerReducer,
  },
});
