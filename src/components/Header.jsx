import React from 'react';
import { Link } from 'react-router-dom';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Header = () => (
  <header>
    <nav>
      <ul className="navLinks">
        <li>
          <Link to="/">
            <FaLessThan className="lessthan" />
            BACK
          </Link>
        </li>
        <li className="logo">
          <h1>
            crypto
            <span className="desk">Desk</span>
          </h1>
        </li>
        <li>
          <div className="icons">
            <FaMicrophone />
            <FiSettings />
          </div>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
