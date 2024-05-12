import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Hello this is Blogs Post page: {Blogs.length}</h1>
            {
                users.map(user => <li key={user.id}><Link to={`/user/${user.mail}`}> {user.username}</Link></li>)
            }

        </div>
    );
};

export default Blogs;