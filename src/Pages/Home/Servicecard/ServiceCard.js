import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    /* put the data in bootstrap cart that received 
        from Services.js  */

    const { name, img, description, price, id } = service;
    const navigate = useNavigate();

    return (
        <div className='col'>
            <Card className='h-100 card-container' style={{ width: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div className='mb-4'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </div>
                    <div>
                        <h5>Price: Starts from <span className='fs-3 text-danger'>${price}+++</span></h5>
                        <Button onClick={() => navigate(`/checkout/${id}`)} variant="danger">Proceed to Checkout</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;