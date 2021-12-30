import React, { useEffect } from 'react'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import jwt from 'jwt-decode'

function Home() {

    const[contacts, setContacts] = React.useState([])
    const[loading, setLoading] = React.useState(true)
    const token = localStorage.getItem('token')
    const userid = (jwt(token)).id

    useEffect(() => {
       getContacts()
    }, [])

    const getContacts = async () => {
        console.log(userid)
        try { 
            axios.get('http://localhost:3001/contact/getcontact', {
                params: {
                    user: userid
                }
            }) 
            .then((res) => {
                console.log(res.data)
                setContacts(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
            .then(() => {
                setLoading(false)
            })
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    return (
        <div className='home-page'>
            <Navigation />
            { loading &&  (<div id='loading-element'><Spinner animation='border' /></div>) } 
                {contacts.map((data) => {
                    return (
                        <li className='contact-display-el' key={data._id}>
                            <div className='contact-element'>
                                <div>
                                    <h3 id='contact-el-name'>{data.name}</h3>
                                    <p>{data.email}</p>
                                    <p>{data.phone}</p>
                                </div>
                                <div>
                                    <Button>...</Button>
                                </div>
                            </div>      
                        </li>
                    )
                })}
        </div>
    )
}

export default Home
