import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import TheApi from '../components/https';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
  return (
    <> 
      <NavBar />
      <Banner />
      <TheApi />
    </>
  );
}

export default MainPage;
