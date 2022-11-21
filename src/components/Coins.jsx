import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Coin from './Coins';
import { fetchCoins } from '../../Redux/Crypto/CryptoSlice';

const Coins = () => {
  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => (
    crypto.name.toLowerCase().includes(query.toLowerCase())
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch, fetchCoins]);

  return (
    <>
      <ul className="coins">
        { filteredCrypto.map((crypto) => <Coin key={crypto.id} crypto={crypto} />)}
      </ul>
    </>
  );
};

export default Coins;