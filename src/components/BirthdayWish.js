// src/components/BirthdayWish.js
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick'; // Import the Slider component
import Confetti from 'react-confetti'; // Import the confetti library
import './BirthdayWish.css'; // Import your CSS for styling
import animation from '../Images/animation.gif'; // Import your animation GIF
import happybirthday from '../Images/happybirthday.mp3'; // Import your audio file

const BirthdayWish = ({ images, message }) => {
  const audioRef = useRef(null); // Create a ref for the audio element

  const allImages = images; // Keep only the regular images

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Play the audio when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });

      // Unmute after a short delay
      const timeoutId = setTimeout(() => {
        audioRef.current.muted = false; // Unmute the audio
      }, 1000); // Delay to allow autoplay

      return () => clearTimeout(timeoutId); // Cleanup the timeout
    }
  }, []);

  return (
    <div className="card">
      <Confetti width={width} height={height} />
      <h2 className="birthday-header">Happy Birthday, Poornima!</h2>
      <p className="birthday-message">{message}</p>
      <p className="love-quote">"Every moment spent with you is a beautiful dream come true."</p>
      <p className="love-quote">"You are the reason I believe in love."</p>
      <Slider {...settings}>
        {allImages.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Birthday ${index + 1}`} className="birthday-image" />
            {/* Display GIF overlay */}
            <img src={animation} alt="Birthday Animation" className="animation-gif" />
          </div>
        ))}
      </Slider>
      {/* Balloons will be positioned absolutely in the background */}
      <div className="balloon-container">
        <div className="balloon balloon1"></div>
        <div className="balloon balloon2"></div>
        <div className="balloon balloon3"></div>
        <div className="balloon balloon4"></div>
        <div className="balloon balloon5"></div>
      </div>
      {/* Hidden audio element with muted attribute initially */}
      <audio ref={audioRef} src={happybirthday} preload="auto" muted />
    </div>
  );
};

export default BirthdayWish;
