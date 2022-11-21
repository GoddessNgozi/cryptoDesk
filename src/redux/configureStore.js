import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './coins/coins';

const store = configureStore({
  reducer: {
    coins: coinsSlice,
  },
});

export default store;
