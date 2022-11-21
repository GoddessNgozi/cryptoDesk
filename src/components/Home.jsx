import React from 'react';
import Coins from './HomeList';
import Search from './Search';

const Home = () => {
    const [query, setQuery] = useState('');
    
    const onSearch = (event) => {
        setQuery(event.target.value);
      };
      
  return (
    <div className="home">
      <Search query={query} onSearch={onSearch} />
      <Coins />
    </div>
  );
}

export default Home;