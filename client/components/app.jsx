import Book from './Book.jsx';
import Navigation from './Navigation.jsx';
import React from 'react';

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Book />
    </div>
  );
};

export default App;
