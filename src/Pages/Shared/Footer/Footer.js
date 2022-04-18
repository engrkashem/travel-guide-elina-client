import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { ArrowCircleUpIcon } from '@heroicons/react/outline';
import logoDark from '../../../images/logo-dark.png';
import '../../../Styles/Footer.css';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='d-flex justify-content-around mt-5'>
                <div className='text-start'>
                    <h4>ABOUT ME</h4>
                    <p>Simple, Adventarous Girl who Run after Dream. Passionate to Travelling</p>
                    <img src={logoDark} alt="" />
                </div>
                <div className='text-start'>
                    <h4>CONTACT US</h4>
                    <LocationMarkerIcon className=' m-1' height={'25px'} /><span>999, Franklin St, San Francisco</span> <br />
                    <PhoneIcon className=' m-1' height={'25px'} /><span>+1 420 420 0000</span> <br />
                    <MailIcon className=' m-1' height={'25px'} /><span>kashemaust@gmail.com</span> <br />

                </div>
            </div>
            <div className='d-flex align-items-center'>
                <hr className='w-50' />
                <HashLink className='text-light opacity-50' to={'/home#header'}>
                    <ArrowCircleUpIcon height={'60PX'} />
                </HashLink>
                <hr className='w-50' />
            </div>
            <div className='d-flex justify-content-around align-items-center'>
                <div>
                    <small>Copyright &copy;  {new Date().getFullYear()}. All right reserved by ELINE</small>
                </div>
                <div>
                    <button className='btn btn-link text-decoration-none'>Terms and Conditions</button>
                    <button className='btn btn-link text-decoration-none'>Cookies</button>
                    <button className='btn btn-link text-decoration-none'>Privacy Policy</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;