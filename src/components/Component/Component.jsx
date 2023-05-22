import React from 'react'
import { Link } from 'react-router-dom'

export default function Component({ message, homeLink = true }) {
    message = message || 'Components are cool!'

    return (
        <div>
            {message} <br />
            {homeLink && <Link to="/">Go to home page</Link>}
        </div>
    )
}
