import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Coin from './Coin';
import Search from './Search';
import { fetchCoins } from '../redux/coins/coins';

const Coins = () => {
  const coins = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');

  const filteredCoins = coins.filter((coin) => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Search search={search} onSearch={onSearch} />
      <ul className="cards">
        { filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            img={coin.icon}
            id={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            rank={coin.rank}
            price={coin.price}
          />
        ))}
      </ul>
    </>
  );
};

export default Coins;
