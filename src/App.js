import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
<>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <p className='footer'>© Charles Cantin 2024</p>
  </Router>
</>
  );
}


export default App;
