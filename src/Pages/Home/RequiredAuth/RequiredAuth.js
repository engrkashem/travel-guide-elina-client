import React, { Children } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequiredAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth)
    let location = useLocation();

    if (loading) {
        return <p>
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
        </p>
    }

    if (!user) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;