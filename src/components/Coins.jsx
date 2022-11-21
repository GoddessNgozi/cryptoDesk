import React, { useState } from 'react';
import Coin from './Coin';
import Search from './Search';

const Coins = () => {
  const [search, setSearch] = useState('');

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Search search={search} onSearch={onSearch} />
      <ul className="coins">
        <Coin
          key={coin.id}
          img={coin.icon}
          id={coin.id}
          symbol={coin.symbol}
          rank={coin.rank}
          name={coin.name}
          price={coin.price}
        />
      </ul>
    </>
  );
};

export default Coins;
