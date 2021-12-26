import React from 'react'
import { Link } from 'react-router-dom'

function Lost() {
    return (
        <div className='lost-page-404'>
            <div id='lost-page-text'>
                <h1>404 Not Found</h1>
                <p>Seems like you're lost..</p>
                <Link to='/'>Back home</Link>
            </div>
        </div>
    )
}

export default Lost
