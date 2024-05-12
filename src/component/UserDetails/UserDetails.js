import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userdetails = useLoaderData();
    return (
        <div>
            <h2>{userdetails.mail}</h2>

        </div>
    );
};

export default UserDetails;