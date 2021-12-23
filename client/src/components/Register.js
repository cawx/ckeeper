import React from 'react'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'

function Register() {
    return (
        <Form>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type='submit'>Register</Button>
        </Form>
    )
}

export default Register
