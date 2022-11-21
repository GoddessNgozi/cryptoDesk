import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Header = () => (
  <header>
    <Navbar className="nav">
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/">
              <FaLessThan className="lessthan" />
              Home
            </Link>
          </li>
          <li className="headerList">
            <h1>Crypto Metrics</h1>
          </li>
          <li className="headerList">
            <div className="icons-class">
              <FaMicrophone />
              <FiSettings />
            </div>
          </li>
        </ul>
      </nav>
    </Navbar>
  </header>
);

export default Header;
