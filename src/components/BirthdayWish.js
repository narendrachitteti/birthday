// src/components/BirthdayWish.js
import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import './BirthdayWish.css'; // Import your CSS for styling

const BirthdayWish = ({ images, message }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="card">
      <h2 className="birthday-header">Happy Birthday, Poornima!</h2>
      <p className="birthday-message">{message}</p>
      <p className="love-quote">"Every moment spent with you is a beautiful dream come true."</p>
      <p className="love-quote">"You are the reason I believe in love."</p>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Birthday ${index + 1}`} className="birthday-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BirthdayWish;
