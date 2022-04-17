import React from 'react';

const HeaderText = () => {
    return (
        <div className='header-text-container d-flex flex-column justify-content-around container'>
            <div className='text-start '>
                <h1 className='header-text' >JOIN <span className='elina'>ELINA</span> </h1>
                <h1 className='header-text'> EXPLORE THE UNEXPLORED !!</h1>
            </div>
            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control search-field border-danger" placeholder="Search Tour Plan" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-danger" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    );
};

export default HeaderText;