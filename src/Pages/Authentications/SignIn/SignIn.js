import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignIn.css';
import googleIcon from '../../../images/google.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div id='sign-in' className=' login-container mx-auto my-2'>
                <h2 className='text-center'>Sign In</h2>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant=" d-block mx-auto w-50 " type="submit">
                        Sign In
                    </Button>
                </Form>
                {error ? error.message : ''}
                <p className='mt-4'>New to Travel With Elina?
                    <span
                        onClick={() => navigate('/sign-up')}
                        className='btn btn-link text-decoration-none fw-bold'>Sign Up</span>
                </p>
                <div className='d-flex align-items-center my-4'>
                    <hr />
                    <p className='pt-3 mx-1'>Or</p>
                    <hr />
                </div>
                <div>
                    <Button variant=" d-block mx-auto w-50 " type="submit" alt="" ><img height={'30px'}
                        alt='' src={googleIcon} /> Google Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;