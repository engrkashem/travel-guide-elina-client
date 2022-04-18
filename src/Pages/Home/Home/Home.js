import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Slider></Slider>
        </div>
    );
};

export default Home;