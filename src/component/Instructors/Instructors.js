import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Instructors = () => {
    const { user } = useContext(AuthContext)




    return (
        <div>
            <h6>This our Instructors Details Page{user?.displayName} <span>{user?.email}</span></h6>

        </div>
    );
};

export default Instructors;