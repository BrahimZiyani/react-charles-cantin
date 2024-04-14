import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Prices from './pages/Prices';
import './App.css';
import ContactPage from './pages/Contact';

function App() {
  return (
<>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <p className='footer'>© Charles Cantin 2024</p>
  </Router>
</>
  );
}


export default App;
