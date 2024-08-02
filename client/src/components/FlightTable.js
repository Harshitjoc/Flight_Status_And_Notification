import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightRow from './FlightRow';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import styles from '../FlightTable.css';
import { format } from 'date-fns';

const FlightTable = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const [delayedFlights, setDelayedFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('https://flight-status-mock.core.travelopia.cloud/flights');
        setFlights(response.data);
      } catch (error) {
        setError('Error fetching flight data');
      }
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const delayed = flights.filter(flight => flight.status === 'Delayed');
    setDelayedFlights(delayed);

    if (delayed.length > 0) {
      sendEmailNotification(delayed);
    }
  }, [flights]);

  const sendEmailNotification = () => {
    const flightDetails = delayedFlights.map(flight =>
      `Flight ${flight.flightNumber} scheduled to depart at "${format(new Date(flight.departureTime), 'Pp')}" is delayed.`).join('\n');

    axios.post('http://localhost:3001/send-email', {
      subject: 'Delayed Flights Notification',
      text: `The following flights are delayed:\n\n${flightDetails}`
    }).then(response => {
      console.log('Email sent:', response.data);
    }).catch(error => {
      console.error('Error sending email:', error);
    });
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <TableContainer component={Paper} className={styles.tableContainer} sx={{ marginBottom: '5rem' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flight Number</TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight) => (
            <FlightRow key={flight.id} flight={flight} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightTable;

