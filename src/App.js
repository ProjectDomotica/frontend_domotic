import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainPage from './Views/mainpage';
import LetsConnect from './Views/letsConnect';

const App = () => {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='letsConnect' element={<LetsConnect/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
