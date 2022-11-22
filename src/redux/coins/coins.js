import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_COINS = 'store/coins/FETCH_COINS';

const fetchCoins = createAsyncThunk(FETCH_COINS, async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const coins = await response.json();
  return coins;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState: [],
  reducers: {
    coinDetails: (state, action) => {
      const newState = state.map((coin) => {
        if (coin.id === action.payload) return coin;
        return { ...coin, display: true };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload.coins.map((coin) => ({
          ...coin,
          display: false,
        }));
        return newState;
      })
      .addDefaultCase((state) => state);
  },
});

export { fetchCoins };
export default coinsSlice.reducer;
export const { coinDetails } = coinsSlice.actions;
