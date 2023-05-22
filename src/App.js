import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

// Components
import Component from './components/Component/Component'

// Pages
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'

export default function App() {
    return (
        <div className="app-container">
            <h1>React Template</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/component" element={<Component />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}
