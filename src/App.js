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
      <Hero />
      <Routes>
        <Route path="/" exact />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
  </Router>
</>
  );
}


export default App;
