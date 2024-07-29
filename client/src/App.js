import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightBoard from './pages/FlightBoard';
import FlightDetailPage from './pages/FlightDetailPage';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/flights/:id" element={<FlightDetailPage />} />
          <Route path="/" element={<FlightBoard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
