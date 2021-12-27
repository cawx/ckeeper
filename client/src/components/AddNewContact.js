import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'

function AddNewContact(props) {
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
                    <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Phone number">
                    <Form.Control type="number" placeholder="Phone number" />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Add contact</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewContact
