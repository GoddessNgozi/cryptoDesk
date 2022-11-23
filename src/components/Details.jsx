import React from 'react';
import PropTypes from 'prop-types';
import { FaTwitter, FaBattleNet } from 'react-icons/fa';
import './Details.css';

const Details = ({
  id, name, symbol, price, rank, icon,
  priceChange1h, priceChange1d, priceChange1w,
  totalSupply, marketCap, volume, websiteUrl,
}) => (
  <div id={id} className="myCoinContainer">
    <div className="coinTitle">
      <h2>{name}</h2>
      <p>{symbol}</p>
    </div>
    <div>
      <section className="coinHeader">
        <div className="devider">
          <h3 className="head-subtitle">Category:</h3>
          <p className="coinCategory">
            {name}
            {' '}
            Ecosystem
          </p>
        </div>
        <div className="devider">
          <h3 className="head-subtitle">CMC Rank:</h3>
          <p>{rank}</p>
        </div>
        <div className="devider">
          <h3 className="head-subtitle">Market Price:</h3>
          <p>{price}</p>
        </div>
        <div className="devider devider-img">
          <img src={icon} alt="Crypto logo" className="coinImg" />
        </div>
      </section>
      <section className="coinBody">
        <h3 className="coinBodyTitle">Price changes per time</h3>
        <div className="coinPrices">
          <div className="change">
            <h3>7d:</h3>
            <p className="coinprice">{`%${priceChange1w}`}</p>
          </div>
          <div className="change">
            <h3>24h:</h3>
            <p className="coinprice">{`%${priceChange1d}`}</p>
          </div>
          <div className="change">
            <h3>1h:</h3>
            <p className="coinprice">{`%${priceChange1h}`}</p>
          </div>
        </div>
        <div>
          <h3 className="coinBodyTitle">Daily price tracking</h3>
          <div className="supply hl">
            <h3>High 24h:</h3>
            <p className="coinprice">{`$${priceChange1d}`}</p>
          </div>
          <div className="supply hl sp">
            <h3>Low 24h:</h3>
            <p className="coinprice">{`$${priceChange1h}`}</p>
          </div>
        </div>
        <div className="coinSupplies">
          <div className="supply sp">
            <h3>Total supply:</h3>
            <p>{totalSupply}</p>
          </div>
          <div className="supply max-supply">
            <h3>Max supply:</h3>
            <p>{marketCap || 'Not max supply data'}</p>
          </div>
          <div className="supply">
            <h3>Volume:</h3>
            <p>{volume}</p>
          </div>
        </div>
        <div className="coinSocial">
          <a href={websiteUrl}><img src={icon} alt="website logo" className="socialIcon" /></a>
          <FaBattleNet className="socialIcon" />
          <FaTwitter className="socialIcon" />
        </div>
      </section>
    </div>
  </div>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  priceChange1h: PropTypes.number.isRequired,
  priceChange1d: PropTypes.number.isRequired,
  priceChange1w: PropTypes.number.isRequired,
  totalSupply: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default Details;
