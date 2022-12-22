import Footer from '../components/Footer.jsx';
import Main from './Main.jsx';
import Navigation from '../components/Navigation.jsx';
import React from 'react';

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
