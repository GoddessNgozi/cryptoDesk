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
          width: '100%', height: '159px', borderColor: 'white', backgroundColor: '#1d6cffc1',
        }}
      >
        <Card.Img
          src={img}
          alt={name}
          style={{
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '55px', margin: '50px 0 50px',
          }}
        />
        <Card.ImgOverlay className="info">
          <Card.Title><h3>{name}</h3></Card.Title>
          <Card.Text>
            $
            {price}
          </Card.Text>
          <Card.Text>{symbol}</Card.Text>
          <Card.Text>{rank}</Card.Text>
          <Link
            to={`/details/${name}`}
          >
            <FaArrowRight className="fontIcon" onClick={display} style={{ color: 'white' }} />
          </Link>
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
