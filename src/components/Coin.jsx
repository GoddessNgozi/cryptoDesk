import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { coinDetails } from '../redux/coins/coins';

const Coin = ({
  id, name, symbol, price, img, rank,
}) => {
  const dispatch = useDispatch();

  const display = () => {
    dispatch(coinDetails(symbol));
  };

  return (
    <li className="listItem">
      <Card
        className="text-white card"
        id={id}
        style={{
          width: '100%', height: '159px', borderColor: 'rgb(0, 208, 255)', backgroundColor: '#1865F9',
        }}
      >
        <Card.Img
          src={img}
          alt={name}
          style={{
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '55px', margin: 'auto',
          }}
        />
        <Card.ImgOverlay>
          <div className="top">
            <span className="rank">
              RANK
              #
              {rank}
            </span>
            <span>
              <Link
                to={`/details/${name}`}
              >
                <FaArrowRight
                  className="fontIcon"
                  onClick={display}
                  style={{
                    color: 'rgb(0, 208, 255)', border: '1.5px solid rgb(0, 208, 255)', borderRadius: '50%', padding: '3px', fontSize: '25px',
                  }}
                />
              </Link>
            </span>
          </div>
          <div className="info">
            <Card.Title className="name">
              {name}
            </Card.Title>
            <div className="floater">
              <p className="symbol">{symbol}</p>
              <p className="price">
                $
                {price}
              </p>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </li>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coin;
