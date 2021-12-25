import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from '../images/contact-icon.png'

function LandingNav() {
    return (
        <>
            <Navbar className='home-nav' >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='land-nav-links'>
                        <Nav.Link href='/'>
                            <Navbar.Brand id='land-logo'>
                                <img src={logo} width="35" height="30" className='d-inline-block align-top' />
                                <h3>Keeper</h3>
                            </Navbar.Brand>
                        </Nav.Link>
                        <div id='land-nav-buttons'>
                            <Nav.Link href='/login'><Button id='land-nav-login'>Login</Button></Nav.Link>
                            <Nav.Link href='/register'><Button id='land-nav-register'>Register</Button></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
        
    )
}

export default LandingNav
