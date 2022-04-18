import React from 'react';
import { Button, Form } from 'react-bootstrap';
import googleIcon from '../../../images/google.png';
import { useCreateUserWithEmailAndPassword, sendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    //vanilla css is written SignIn.css for both SignIn.js and SignUp.js

    //first implemented email-pasword sign up, then google sign up

    // To Navigate to desired route
    const navigate = useNavigate();

    //Email-password sign up/register react firebase hook
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //Google sign in react firebase hook
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //after sign up redirect the user to home
    if (user || gUser) {
        navigate('/')
    }

    //error handle if any error happen
    let errorMessage;
    if (error) {
        errorMessage = error.message;
    }
    else if (gError) {
        errorMessage = gError.message;
    }

    //loading spin is shown on UI
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    //Email-password sign up/register
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <div id='sign-in' className=' login-container mx-auto my-2'>
                <h2 className='text-center'>Sign Up</h2>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant=" d-block mx-auto w-50 " type="submit">
                        Sign Up Now
                    </Button>
                </Form>
                <p className='mt-3 text-danger'>{errorMessage}</p>
                <p className='mt-4'>Already Have an Account?
                    <span
                        onClick={() => navigate('/sign-in')}
                        className='btn btn-link text-decoration-none fw-bold'>Sign In</span>
                </p>
                <div className='d-flex align-items-center my-4'>
                    <hr />
                    <p className='pt-3 mx-1'>Or</p>
                    <hr />
                </div>
                <div>
                    <Button onClick={() => signInWithGoogle()} variant=" d-block mx-auto w-50 " type="submit" alt="" ><img height={'30px'}
                        alt='' src={googleIcon} /> Google Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;