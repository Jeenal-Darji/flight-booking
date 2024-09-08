import React, { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';

const FlightSearch = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('oneWay');
  const [flights, setFlights] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  
  const navigate = useNavigate();
  

const handleSearch = async () => {
    const searchData = {
      origin,
      destination,
      tripType
    };


    try {
      const response = await fetch('/api/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchData)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch flights');
      }
      const data = await response.json();
      setFlights(data);
      setSearchClicked(true);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };
  const handleButtonClick = () => {    
      navigate('/Option');   
  };
  return (    
    <div className="flight-search-container">
      <div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="oneWay"
              checked={tripType === 'oneWay'}
              onChange={() => setTripType('oneWay')}
            />
            One Way
          </label>
          <label>
            <input
              type="radio"
              value="roundTrip"
              checked={tripType === 'roundTrip'}
              onChange={() => setTripType('roundTrip')}
            />
            Round Trip
          </label>
        </div>
        <label>Origin:</label>
        <input type="text" value={origin} onChange={e => setOrigin(e.target.value)} />
      </div>
      <div>
        <label>Destination:</label>
        <input type="text" value={destination} onChange={e => setDestination(e.target.value)} />
      </div>
      <div>
        <label>Departure Date:</label>
        <input type="date" />
      </div>
      {tripType === 'roundTrip' && (
        <div>
          <label>Return Date:</label>
          <input type="date" />
        </div>
      )}
      <button onClick={handleSearch}>Search</button>

      {/* Display flights */}
      {searchClicked && (
      <div>
  {flights.map((flight, index) => (
    <div key={index} >
      <p style={{ color: 'white', fontWeight: 'bold' }}>
<ul key={index}> {flight.source} to {flight.destination}
<li> Departure Time : {flight.starting_time} , Arrival Time : {flight.ending_time}</li>
<li>FlightNo : {flight.flight_number} , Price : {flight.price}</li>

</ul>  
      </p>
    </div>
  ))}
  <button onClick={handleButtonClick}>Book Flight</button>
</div>
)} 

    </div>
  );
};

export default FlightSearch;
