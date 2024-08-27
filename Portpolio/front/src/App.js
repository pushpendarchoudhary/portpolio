import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <div class="left-side"></div>
    <div class="right-side"></div>
      <Header />
      <Routes>
          <Route path='/' Component={Home}/>
         
      </Routes>
      <Footer/>
    </div></Router>
  );
}

export default App;
