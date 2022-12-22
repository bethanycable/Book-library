import Book from '../components/Book.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import React from 'react';

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Book />
      <Footer />
    </div>
  );
};

export default App;
