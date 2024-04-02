import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <div className="centeredText">
        <h1>Charles Cantin</h1>
        <p>Photographe</p>
      </div>
    </>
  );
}


export default App;
