import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceDetails = ({ service: { name, description, price, img } }) => {


    return (
        <div className='col service-details-card'>
            <div className=' card-container' style={{ width: '100%' }}>
                <Card.Img src={img} variant="top" />
                <Card.Body className='d-flex flex-column justify-content-between service-details-card'>
                    <div className='mb-4'>
                        <h2 className='text-light '>{name}</h2>
                        <h6 className='text-light opacity-75'>
                            {description}
                        </h6>
                    </div>
                    <div>
                        <h5><span className='text-light opacity-75'>Price: Starts from</span> <span className='fs-3 text-danger'>${price}+++</span></h5>
                    </div>
                </Card.Body>
            </div>
        </div>
    );
};

export default ServiceDetails;