import React from 'react';
import AnalogClock from 'analog-clock-react';

const ChooseTour = () => {
    //variable for react analog clock
    const options = {
        width: '300px',
        border: true,
        borderColor: "rgba(252, 27, 27, 0.4)",
        baseColor: "rgba(156, 239, 252, 0.7)",
        centerColor: "blue",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "rgba(252, 27, 27, 0.6)",
            minute: "rgba(255, 255, 255, 0.8)",
            hour: "rgba(255, 255, 255, 0.7)"
        }
    }

    /* *****Vanilla css is written in Home.css file**** */
    return (
        <div className='row row-cols-md-1 row-cols-lg-2 choose-tour-container' >
            <div className="col text-center">
                <div className='h-100 d-flex flex-column justify-content-center'>
                    <h1 className='text-light opacity-75'>HURRY UP !!!!!! Grab The Chance</h1>
                    <h1 className='text-light opacity-75'> To DISCOVER the WORLD With</h1>
                    <h1 className='elina'>ELINA</h1>
                </div>
            </div>
            <div className="col">
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <AnalogClock {...options}></AnalogClock>
                </div>
            </div>
        </div >
    );
};

export default ChooseTour;