import React from 'react'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function Register() {

    const[firstName, setFirstName] = React.useState('')
    const[lastName, setLastName] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control name='firstName' type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)} required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control name='lastName' type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name='email' type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button type='submit'>Register</Button>
        </Form>
    )
}

export default Register
