import React, { useContext } from 'react';
import { AuthContext } from '../component/UserContext/UserContext';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import './PrivateRoute.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='spinners-loading'><Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />Loading................</div>
    }



    if (user && user.uid) {
        return children;
    }
    return (
        <div>
            <Navigate to='/Home'></Navigate>

        </div>
    );
};

export default PrivateRoute;