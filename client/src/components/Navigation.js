import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function Navigation() {
    return (
        <Navbar>
            <Navbar.Brand>Keeper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Button>Login</Button></Nav.Link>
                    <Nav.Link><Button>Register</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
           
    )
}

export default Navigation
