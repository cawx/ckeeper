import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function Login() {

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
        </Form>
    )
}

export default Login
