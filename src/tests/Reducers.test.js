import store from '../redux/configureStore';
import { fetchCoins, coinDetails } from '../redux/coins/coins';

describe('coin reducers', () => {
  it('should fetch coins', async () => {
    await store.dispatch(fetchCoins());
    expect(store.getState().coins.length).toEqual(100);
  });

  it('should fetch coin details', () => {
    store.dispatch(coinDetails('BTC'));
    expect(store.getState().coins[0].display).toBe(true);
  });
});
