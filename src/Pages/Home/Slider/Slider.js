import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import london from '../../../images/london.png';
import america from '../../../images/america.png';
import asia from '../../../images/asia.png';

const Slider = () => {
    //it is simply a carousel that showed in UI via Home component
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={london}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>LONDON</h1>
                        <Button variant='danger rounded-pill'>Explore Europe</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={america}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>USA</h1>
                        <Button variant='danger rounded-pill'>Explore America</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={asia}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>ASIA</h1>
                        <Button variant='danger rounded-pill'>Explore ASIA</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;