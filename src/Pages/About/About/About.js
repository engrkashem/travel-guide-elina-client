import React from 'react';
import profilePic from '../../../images/profile.jpg'

const About = () => {
    return (
        <div className='p-5 bg-dark text-light'>
            <h1 className='text-center mt-5 opacity-75'>Developer Introduction</h1>
            <div className='row row-cols-md-1 row-cols-lg-2 g-5'>
                <div className='col d-flex align-items-center'>
                    <div className='h-50'>
                        <h2 className='text-center text-danger opacity-75'>MOHAMMAD ABUL KASHEM</h2>
                        <h3 className='text-center opacity-75'>Career Goal</h3>
                        <h6 className='text-center opacity-75'>Want to establish myself a full stack developer in shortest possible time. Working very very hard every day and improving day by day. Ensuring a step ahead than previous day twards goal every single time going to bed.</h6>
                    </div>

                </div>
                <div className='col p-1'>
                    <div className='my-5 d-flex justify-content-center'>
                        <img className='rounded-circle' width={'320px'} src={profilePic} alt="Developper Profile Pic" />
                    </div>
                    <div className='px-5'>
                        <h5 className='text-center opacity-75'>BSc in EEE</h5>
                        <h6 className='text-center opacity-75'>MIEB: M-39570</h6>
                        <h6 className='opacity-75'>SKILLS: </h6>
                        <ul className='row row-cols-2 row-cols-md-3 '>
                            <li className='col opacity-75'>HTML</li>
                            <li className='col opacity-75'>CSS</li>
                            <li className='col opacity-75'>JavaScript</li>
                            <li className='col opacity-75'>ReactJs</li>
                            <li className='col opacity-75'>Firebase</li>
                            <li className='col opacity-75'>C</li>
                            <li className='col opacity-75'>C++</li>
                            <li className='col opacity-75'>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;