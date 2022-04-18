import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../../Styles/SignIn.css';
import googleIcon from '../../../images/google.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';


const SignIn = () => {
    //vanilla css is written SignIn.css for both SignIn.js and SignUp.js

    //first implemented email-pasword sign in, then google sign in

    //useRef() to get user input in respective field
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // To Navigate to desired route
    const navigate = useNavigate();

    //To get user current route
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    //Email-password sign in react firebase hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //Google sign in react firebase hook
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //Password reset react firebase hook in case user forgot password.
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    //error message shown in Ui
    let errorMessage;
    if (error) {
        errorMessage = error.message;
    }
    else if (gError) {
        errorMessage = gError.message;
    }

    //Email-password sign in function
    const handleSignIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    //Redirect the user to protected page after sign in
    if (user || gUser) {
        console.log(user?.user?.uid, gUser?.user?.uid)
        navigate(from, { replace: true });
    }

    //Loading spin. 
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    //reset password function. notificatio shown on UI using react toast
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email is Sent');
        }
        else {
            toast('Please Enter Your Email Address');
        }

    }


    return (
        <div>
            <div id='sign-in' className=' login-container mx-auto my-2'>
                <h2 className='text-center'>Sign In</h2>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant=" d-block mx-auto w-50 " type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className='mt-3 text-danger fw-bold'>{errorMessage}</p>
                <p className='mt-4'>New to Travel With Elina?
                    <span
                        onClick={() => navigate('/sign-up')}
                        className='btn btn-link text-decoration-none fw-bold'>Sign Up</span>
                </p>
                <p className='mt-4'>Forgot Password?
                    <span
                        onClick={resetPassword}
                        className='btn btn-link text-decoration-none fw-bold'>Reset Password</span>
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
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SignIn;