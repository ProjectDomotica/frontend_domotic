import React from "react";
import './home.css';
// import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';

const Home = () =>{
    return (
        <div className="Home">
            {/* <NavBar /> */}
            <Banner />
            <h1>Home</h1>
            <p>Home page</p>
        </div>
    )
}

export default Home;