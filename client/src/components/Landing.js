import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import LandingNav from "./LandingNav"

function Landing() {
    return (
        <>
            <LandingNav />
            <div className='landing-page-s1'>
                <div id='landing-welcome-text'>
                    <h1>All of your contacts in one place</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button id='landing-btn1'>Read more</Button>
                </div>
            </div>
            <div className='landing-page-s2'>

            </div>
        </>
        
    )
}

export default Landing
