import React from 'react';
import PropTypes from 'prop-types';

const Details = ({
  id, name, symbol, price, rank,
}) => (
  <ul>
    <li className="listItem">
      <h1>hello</h1>
      <div
        className="homeItem"
        id={id}
      >
        <div className="home-item-img" />
        <div className="home-item-info">
          <p>
            #
            {rank}
          </p>
          <h3 className="name">{name}</h3>
          <p className="symbol">{symbol}</p>
          <p>
            $
            {price}
          </p>
        </div>
      </div>
    </li>
  </ul>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Details;
