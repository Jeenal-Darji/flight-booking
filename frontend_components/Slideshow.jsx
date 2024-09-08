// Slideshow.js
import React from 'react';
import './Slideshow.css'
import { Carousel } from 'react-bootstrap';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';


const Slideshow = () => {
  return (
    <div className="slideshow-container">
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Slideshow;
