import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h1>Error Page</h1>
            <p>404: Page not found</p>
            <Link to="/">Go to home page</Link>
        </div>
    )
}
