import React from 'react';
import ChooseTour from '../ChooseTour/ChooseTour';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    //This is home page, only 3 components are added.
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Slider></Slider>
            <ChooseTour></ChooseTour>
        </div>
    );
};

export default Home;