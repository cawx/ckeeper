import React from 'react'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import LandingNav from './LandingNav'

function Register() {

    const[firstName, setFirstName] = React.useState('')
    const[lastName, setLastName] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')
    const[error, setError] = React.useState(false)

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
            setError(false)
        })
        .catch((err) => {
            setError(true)
            console.log(err)
        })
    }

    return (
        <div className='register-page'>
            <LandingNav />
            <Form onSubmit={handleSubmit} className='register-form'>
                <h1>Register</h1>
                { error && (<div id='register-error-msg'>Error creating an account</div>) }
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
                <Button type='submit' id='form-rl-button'>Register</Button>
                <a href='/login'>Already have an account? Login here</a>
            </Form>
        </div>
    )
}

export default Register
