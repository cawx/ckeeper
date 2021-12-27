import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LandingNav from "./LandingNav"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const navigate = useNavigate()

    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')
    const[error, setError] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('wow much work')

        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            setError(false)
            navigate('/home')
        })
        .catch((err) => {
            setError(true)
            console.log(err)
        })

    }

    return (
        <div className='login-page'>
            <LandingNav />
            <Form onSubmit={handleSubmit} className='login-form'>
                <h1>Login</h1>
                { error && (<div id='login-error-msg'>Wrong e-mail or password</div>) }
                <Form.Group controlId="formGridEmail" id='login-form-input'>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control name='email' type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                </Form.Group>
                <Button type='submit' id='form-rl-button'>Login</Button>
                <a href='/register'>Don't have an account? Create one here</a>
            </Form>
        </div>
        
    )
}

export default Login
