import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cryptos: '',
  },
});

export default store;
