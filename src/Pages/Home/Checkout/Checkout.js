import React from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../../hooks/useService';
import FormHook from '../FormHook/FormHook';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Checkout.css'

const Checkout = () => {

    const [services] = useService();
    const { serviceId } = useParams();
    const selectedService = services.filter(service => service.id === parseInt(serviceId));

    /* *****Vanilla css is written in Checkout.css file******  */

    return (
        <div className=' checkout-container row row-cols-md-1 row-cols-lg-2'>
            <div className='col '>
                {selectedService.map(service => <ServiceDetails
                    key={service.id}
                    service={service}
                ></ServiceDetails>)}
            </div>
            <div className='col'>
                <h1 className='text-light text-center '>Checkout</h1>
                <FormHook></FormHook>
            </div>
        </div>
    );
};

export default Checkout;