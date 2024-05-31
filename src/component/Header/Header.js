import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import logo from '../../learning programming.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <Navbar bg="primary" data-bs-theme="light" collapseOnSelect expand="lg" >

            <Container>
                <div className='logo-set '><img src={logo} height={35} width={35} alt="" /></div>
                <Navbar.Brand href="Home">Language Course Carrier</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="About">About Us</Nav.Link>
                        <Nav.Link href="Courses">Courses List</Nav.Link>
                        <Nav.Link href="Instructors">Instructor Info</Nav.Link>
                        <Nav.Link href="Events">Our Events</Nav.Link>
                        <Nav.Link href="Contact">Contact Info</Nav.Link>
                        <Nav.Link href="Blogs">Blogs</Nav.Link>
                        <Nav.Link href="SignUp">SignUp</Nav.Link>

                        <Nav.Link href="Courses">Courses</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="Courses">Java script</NavDropdown.Item>
                            <NavDropdown.Item href="Courses">Programming in C
                            </NavDropdown.Item>
                            <NavDropdown.Item href="Courses">ReactJs</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Nav>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );


};

export default Header;