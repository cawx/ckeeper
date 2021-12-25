import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const navigate = useNavigate()

    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('wow much work')

        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res.data)
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name='email' type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button type='submit'>Login</Button>
            <a href='/register'>Don't have an account? Create one here</a>
        </Form>
    )
}

export default Login
