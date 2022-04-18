import React from 'react';
import FormHook from '../FormHook/FormHook';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className=' checkout-container'>
            <h1 className='text-light text-center '>Checkout</h1>
            <FormHook></FormHook>
        </div>
    );
};

export default Checkout;