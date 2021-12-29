import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import axios from 'axios'
import jwt from 'jwt-decode'

function AddNewContact(props) {

    const[name, setName] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[phone, setPhone] = React.useState('')

    const token = localStorage.getItem('token')
    if(!token) {
        window.location.reload()
        return console.error('Not logged in')
    }
    const userid = (jwt(token)).id

    const handleAddContact = (e) => {
        e.preventDefault()
        props.onHide()

        const contactData = {
            user: userid,
            name: name,
            email: email,
            phone: phone
        }

        console.log('still works?')
        axios.post('http://localhost:3001/contact/addcontact', contactData)
        .then((res) => {
            console.log(res.data)
            setName('')
            setEmail('')
            setPhone('')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='addnewcontact-form'
            >
            <Modal.Header closeButton>
                <Modal.Title id="addcontact-title">
                Add new contact
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" onChange={e => setName(e.target.value)} required/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Phone number">
                    <Form.Control type="number" placeholder="Phone number" onChange={e => setPhone(e.target.value)}/>
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleAddContact}>Add contact</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewContact
