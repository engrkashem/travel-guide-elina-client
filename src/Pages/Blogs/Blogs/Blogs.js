import React from 'react';
import Blog1 from '../Blog1.js/Blog1';
import Blog2 from '../Blog2/Blog2';
import Blog3 from '../Blog3/Blog3';

const Blogs = () => {
    return (
        <div className='pt-5 p-3 bg-dark text-white'>
            <h1 className='text-center mb-4 opacity-75'>Our Blogs</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title mb-5 opacity-75">What is The Difference Between Authentication and Authorization</h5>
                            <Blog1 className="card-text"></Blog1>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title mb-5 opacity-75">Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <Blog2 className="card-text"></Blog2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title mb-5 opacity-75">What other services does firebase provide except authentication</h5>
                            <Blog3 className="card-text"></Blog3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;