import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Details from './Details';

const CoinDetails = () => {
  // const params = useParams();
  const coins = useSelector((state) => state.coins);

  return (
    <main>
      <h1>hello</h1>
      {coins.filter((coin) => coin.display === true).map((coin) => (
        <Details
          key={coin.id}
          id={coin.id}
          symbol={coin.symbol}
          rank={coin.rank}
          name={coin.name}
          price={coin.price}
        />
      ))}
    </main>
  );
};

export default CoinDetails;
