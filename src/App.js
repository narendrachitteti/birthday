// src/App.js
import React from 'react';
import BirthdayWish from './components/BirthdayWish';
import birthday1 from './Images/birthday1.jpeg';
import birthday2 from './Images/birthday2.jpeg';
import birthday3 from './Images/birthday3.jpeg';
import birthday4 from './Images/birthday4.jpeg';
import birthday5 from './Images/birthday5.jpeg';
import birthday6 from './Images/birthday6.jpeg';
// src/index.js or src/App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const images = [birthday3, birthday2, birthday1, birthday4, birthday5, birthday6];
  const message = 'Wishing you a day filled with love and joy!';

  return (
    <div style={{ padding: '20px' }}>
      <BirthdayWish images={images} message={message} />
    </div>
  );
};

export default App;
