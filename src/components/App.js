import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Home';
import KeyFeatures from '../components/pages/KeyFeatures';
import Testimonials from '../components/pages/Testimonials';
import Pricing from '../components/pages/Pricing';
import Navbar from '../components/Navbar/Navbar';
import Demo from '../components/pages/Demo';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element = {<Home/>}/>
          <Route path='/features'  element = {<KeyFeatures/>}/>
          <Route path='/testimonials'  element = {<Testimonials/>}/>
          <Route path='/pricing'  element = {<Pricing/>}/>
          <Route path='/demo'  element = {<Demo/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
