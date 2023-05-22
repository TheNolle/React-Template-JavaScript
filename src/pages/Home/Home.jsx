import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Component from '../../components/Component/Component'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Component message="This uses the ''Component'' component with a custom message" homeLink={false} /> <br />
            <Link to="/component">Go to component page</Link> <br />
            <Link to={`/${Math.floor(Math.random() * 100)}`}>Go to random page</Link>
        </div>
    )
}
