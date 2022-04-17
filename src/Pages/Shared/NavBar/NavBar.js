import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logoDark from '../../../images/logo-dark.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar className='navbar-container' collapseOnSelect expand="lg" variant="dark">
            <Container >
                <Navbar.Brand as={Link} to="/home">
                    <img src={logoDark} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav >
                        <Nav.Link as={CustomLink} to='/blogs' eventKey={2} >Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to='/about' eventKey={2} >
                            About
                        </Nav.Link>
                        {
                            user ?
                                <Nav.Link onClick={() => signOut(auth)} as={CustomLink} to='/sign-in' eventKey={2} >
                                    Sign Out
                                </Nav.Link>
                                :
                                <Nav.Link as={CustomLink} to='/sign-in' eventKey={2} >
                                    Sign In
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;