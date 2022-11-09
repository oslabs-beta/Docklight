import React from 'react';
import Navbar from './Containers/Navbar';
import Homepage from './Components/Homepage';
import { Route, Routes } from 'react-router-dom';
import './Styles/App.css';

//will load containers -- nav bar on left stays persistent all throughout
export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
  );
}

