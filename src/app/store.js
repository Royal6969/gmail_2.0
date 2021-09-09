import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counterSlice'; // I have replaced this for the below that I have created for this...
import mailReducer from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
