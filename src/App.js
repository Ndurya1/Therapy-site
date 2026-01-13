import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header'
import DynamicBackground from './Components/DynamicBackground';
import Contacts from './Components/Contacts';
import Slider from './Components/Slider';
import Laundry from './Components/Laundry';


function App() {
  const imageURL = '../Assets/CTA.jpg';
  return (
    <div className="App bg-gray-100">
      <Header/>
      <Routes>
        <Route path="/" element={<Laundry/>} />
       
      </Routes>
    
   
    </div>
  );
}

export default App;
