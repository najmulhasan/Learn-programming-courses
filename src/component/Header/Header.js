import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../learning programming.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import Home from '../Home/Home';
import { AuthContext } from '../UserContext/UserContext';
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <nav className='header '>
            <div className='logo-set '><img src={logo} height={35} width={35} alt="" /></div>
            <br />
            <br />
            <Navbar>

                <div className='menu'>
                    <Link to='/Home'>Home Page</Link>
                    <Link to='/About'>About Us</Link>
                    <Link to='/Courses'>Courses List</Link>
                    <Link to='/Instructors'>Instructor Info</Link>
                    <Link to='/Events'>Our Events</Link>
                    <Link to='/Contact'>Contact Info</Link>
                    <Link to='/Blogs'>Blogs</Link>
                    <Link to='/SignUp'>SignUp</Link>

                    {user?.displayName
                        && <span>Welcome, {user.displayName
                        }</span>} <span>{user?.email}</span>
                    {
                        user?.email ?
                            <Button onClick={handleLogOut} className='logout-btn' variant="info">Log out</Button>
                            : <Link to='/Home'>
                                <Button className='logout-btn'>Login</Button>
                            </Link>

                    }

                </div>




            </Navbar>

        </nav>



    );


};

export default Header;