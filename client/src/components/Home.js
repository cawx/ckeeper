import React, { useEffect } from 'react'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import AddNewContact from './AddNewContact'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'
import jwt from 'jwt-decode'
import emailIcon from '../images/email.png'
import phoneIcon from '../images/phone.png'

function Home() {

    const[showAdd, setShowAdd] = React.useState(false)
    const[contacts, setContacts] = React.useState([])
    const[loading, setLoading] = React.useState(true)
    const[query, setQuery] = React.useState('')
    const token = localStorage.getItem('token')
    const userid = (jwt(token)).id

    useEffect(() => {
       getContacts()
    }, [])

    const call = (id) => {
        deleteContacts(id)
        getContacts()
    }

    const getContacts = async () => {
        try { 
            axios.get('http://localhost:3001/contact/getcontact', {
                params: {
                    user: userid
                }
            }) 
            .then((res) => {
                setContacts(res.data)
                setLoading(false)
                console.log('GOT CONTACTSy')
            })
            .catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    const deleteContacts = async (id) => {
        console.log(id)
        try {
            axios.delete('http://localhost:3001/contact/deletecontact', {
                params: {
                    contactid: id
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <div className='home-page'>
            <Navigation />
            <div className='search-bar'>
                <input placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)}/>
                <div className='add-c-div'>
                    <Button id='add-c-btn' onClick={() => setShowAdd(true)}>Add new contact +</Button>
                    <AddNewContact show={showAdd} onHide={() => setShowAdd(false)} />
                </div>
            </div>
            { loading &&  (<div id='loading-element'><Spinner animation='border' /></div>) } 
                {contacts.filter(data => {
                    if(query === '') {
                        return data
                    } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                        return data
                    }
                }).map((data) => {
                    return (
                        <li className='contact-display-el' key={data._id}>
                            <div className='contact-element'>
                                <div>
                                    <h3 id='contact-el-name'>{data.name}</h3>
                                    {data.email && <div><img src={emailIcon} id='email-icon'/>{data.email}</div>}
                                    {data.phone && <div><img src={phoneIcon} id='email-icon'/>+{data.phone}</div>}
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle id='contact-el-button' >...</Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                        <Dropdown.Item><Button onClick={() => call(data._id)}>Delete</Button></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>      
                        </li>
                    )
                })}
        </div>
    )
}

export default Home
