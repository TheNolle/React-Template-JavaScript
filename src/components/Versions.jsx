import React, { useEffect, useState } from 'react'

import './Versions.scss'

import packageJson from '../../package.json'

export default function Versions() {
    const [reactVersion, setReactVersion] = useState('')
    const [reactDomVersion, setReactDomVersion] = useState('')
    const [reactRouterDomVersion, setReactRouterDomVersion] = useState('')
    const [sassVersion, setSassVersion] = useState('')
    const [webpackVersion, setWebpackVersion] = useState('')

    
    useEffect(() => {
        setReactVersion(packageJson.dependencies.react)
        setReactDomVersion(packageJson.dependencies['react-dom'])
        setReactRouterDomVersion(packageJson.dependencies['react-router-dom'])
        setSassVersion(packageJson.devDependencies.sass)
        setWebpackVersion(packageJson.devDependencies.webpack)
    }, [])

    return (
        <ul className="versions">
            <li>React: {reactVersion}</li>
            <li>React DOM: {reactDomVersion}</li>
            <li>React Router DOM: {reactRouterDomVersion}</li>
            <li>Sass: {sassVersion}</li>
            <li>Webpack: {webpackVersion}</li>
        </ul>
    )
}
