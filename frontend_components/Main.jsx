import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import video from '../assets/video.mp4';
import { RiFlightTakeoffFill } from "react-icons/ri"; 

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Home'); // Redirects after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <div className="transapp"> {/* Top-level root element */}
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
      </video>

      <div className="translucent-overlay">
        <div className="rowofmain">
          <div className="container"> {/* Root container */}
            <h1 className="website-info">
              Welcome to FLYhigh <RiFlightTakeoffFill size={60} />
            </h1>
            <br />
            <p className="website">
            Your premier destination for hassle-free domestic flight bookings, catering exclusively to
               travellers within the vibrant cities of India providing seamless and delightful booking experience. With an unwavering commitment to reliability, affordability and customer satisfaction, FLYhigh ensures that every journey within India transcends the ordinary, promising an unforgettable experience above the clouds.
            </p>
          </div> 
        </div>
      </div>
    </div> 
  );
};

export default Main;
