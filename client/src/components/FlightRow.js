import React from 'react';
import { Link } from 'react-router-dom';
import { TableRow, TableCell } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import styles from '../FlightTable.css';
import { format } from 'date-fns';

const FlightRow = ({ flight }) => {
  const formattedDepartureTime = format(new Date(flight.departureTime), 'Pp');
  return (
    <TableRow>
      <TableCell>
        <MuiLink component={Link} to={`/flights/${flight.id}`} className={styles.link}>
          {flight.flightNumber}
        </MuiLink>
      </TableCell>
      <TableCell>{flight.airline}</TableCell>
      <TableCell>{flight.origin}</TableCell>
      <TableCell>{flight.destination}</TableCell>
      <TableCell>{formattedDepartureTime}</TableCell>
      <TableCell>{flight.status}</TableCell>
    </TableRow>
  );
};

export default FlightRow;

