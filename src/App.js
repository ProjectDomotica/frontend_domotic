import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheApi from './components/https';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <TheApi />
    </div>
  );
}

export default App;
