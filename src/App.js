import React from 'react'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import About from './Components/Pages/About';
import Services from './Components/Services';
import Login from './Components/Login';
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Services />

      
        <Footer />
       
        <Routes>

        <Route path='/' exact />
        
         

          <Route path='/Login' Component={Login} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
