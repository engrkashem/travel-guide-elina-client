import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container d-flex justify-content-center align-items-end p-5'>
            <button className='btn btn-danger fw-bold fs-5 w-25'>Go to Home</button>
        </div>
    );
};

export default NotFound;