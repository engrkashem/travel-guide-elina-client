import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {

    //to protect a route from a non user excess.

    const [user, loading] = useAuthState(auth)
    let location = useLocation();

    //stay user in protected route even after reload
    if (loading) {
        return <Loading></Loading>
    }

    //if not user then redirect to sign in route 
    if (!user) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;