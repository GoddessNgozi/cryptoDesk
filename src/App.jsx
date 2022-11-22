import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CoinDetails from './components/CoinDetails';
import Header from './components/Header';
import Home from './components/Home';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
