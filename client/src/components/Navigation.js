import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from '../images/contact-icon.png'
import Dropdown from 'react-bootstrap/Dropdown'
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import AddNewContact from './AddNewContact'

function Navigation() {

    const[showAdd, setShowAdd] = React.useState(false)
    const[getName, setGetName] = React.useState(true)
    const[name, setName] = React.useState('')
    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    if(token && getName === true) {
        const tokenDec = jwt(token)
        setName(tokenDec.firstName)
        setGetName(false)
    }
    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

    return (
        <>
            <Navbar className='home-navbar'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='land-nav-links'>
                        <Nav.Link href='/home'>
                            <Navbar.Brand id='land-logo'>
                                <img src={logo} width="35" height="30" className='d-inline-block align-top' />
                                <h3>Keeper</h3>
                            </Navbar.Brand>
                        </Nav.Link>
                        <div>
                            <Button id='add-c-btn' onClick={() => setShowAdd(true)}>Add new contact +</Button>
                            <AddNewContact show={showAdd} onHide={() => setShowAdd(false)} />
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle id="nav-dropdown-btn">
                            {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#">Settings</Dropdown.Item>
                            <Dropdown.Item href="#">Contact</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#"><Button onClick={logout}>Log Out</Button></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
           
    )
}

export default Navigation
