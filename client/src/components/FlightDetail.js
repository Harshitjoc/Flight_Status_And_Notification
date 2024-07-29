import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        setFlight(response.data);
      } catch (error) {
        setError('Error fetching flight details');
      }
    };

    fetchFlight();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!flight) {
    return <div>Loading...</div>;
  }

  const formattedDepartureTime = format(new Date(flight.departureTime), 'Pp');

  return (
    <div>
      <h2>Flight Details for {flight.flightNumber}</h2>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {formattedDepartureTime}</p>
      <p>Status: {flight.status}</p>
    </div>
  );
};

export default FlightDetail;

