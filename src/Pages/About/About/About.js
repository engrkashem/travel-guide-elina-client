import React from 'react';
import profilePic from '../../../images/profile.jpg'

const About = () => {
    return (
        <div className=''>
            <h1>Developer Introduction</h1>
            <div>
                <div>
                    <h3>Career Goal</h3>
                    <h6>Want to establish myself a full stack developer in shortest possible time. Working very very hard every day and improving day by day. Ensuring a step ahead than previous day twards goal every single time going to bed.</h6>

                </div>
                <div>
                    <img width={'350px'} src={profilePic} alt="Developper Profile Pic" />
                    <div>
                        <h5>BSc in EEE</h5>
                        <h6>MIEB: M-39570</h6>
                        <h6>SKILLS: </h6>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>Firebase</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;