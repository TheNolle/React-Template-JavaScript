import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.scss'

import UserBrowser from './components/UserBrowser'
import UserBrowserVersion from './components/UserBrowserVersion'
import Versions from './components/Versions'
import Popup from './components/Popup'

export default function App() {
    return (
        <div className="app-container">
            <header>
                <h1>React Template</h1>
                <p>React template with TypeScript, Sass, React Router, and Webpack.</p>
            </header>

            <main>
                <h2>React Router</h2>
                <Routes>
                    <Route path="/" element={<h4>Home</h4>} />
                    <Route path="/versions" element={<Versions />} />
                    <Route path="/user-browser" element={<UserBrowser />} />
                    <Route path="/user-browser-version" element={<UserBrowserVersion />} />
                    <Route path="/user-browser-and-version" element={<><UserBrowser />, <UserBrowserVersion /></>} />
                    <Route path="*" element={<h4 className="error">Error</h4>} />
                </Routes>

                <nav>
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/error">Error</Link></li>
                    </ul>
                </nav>

                <section>
                    <h2>Components</h2>
                    <ul>
                        <li><Link to="/versions">Package Versions</Link></li>
                        <li><Link to="/user-browser">User Browser</Link></li>
                        <li><Link to="/user-browser-version">User Browser Version</Link></li>
                        <li><Link to="/user-browser-and-version">User Browser and Version</Link></li>
                    </ul>
                </section>

                <section>
                    <h2>About Me</h2>
                    <p>Click on the button below to know more about me.</p>

                    <Popup id="popup" title="About Me">
                        <p>My name is <strong>Nolly</strong>.</p>
                        <p>I am a <strong>web developer</strong> since 6 years now.</p>
                        <p>I am a <strong>full-stack developer</strong> with a focus on <strong>front-end</strong> development.</p>
                        <p>I am a <strong>freelancer</strong> and <strong>open-source contributor</strong>.</p>

                        <p className="title">My favorite technologies are:</p>
                        <ul>
                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
                            <li><a target="_blank" href="https://reactjs.org/">React</a></li>
                            <li><a target="_blank" href="https://nodejs.org/">Node.js</a></li>
                            <li><a target="_blank" href="https://sass-lang.com/">Sass</a></li>
                            <li><a target="_blank" href="https://www.mongodb.com/">MongoDB</a></li>
                            <li><a target="_blank" href="https://expressjs.com/">Express</a></li>
                            <li><a target="_blank" href="https://github.com/">GitHub</a></li>
                            <li>And much more...</li>
                        </ul>

                        <p className="title">See more on:</p>
                        <ul>
                            <li><a target="_blank" href="https://thenolle.com">My website</a></li>
                            <li><a target="_blank" href="https://github.com/thenolle">My GitHub</a></li>
                            <li><a target="_blank" href="https://discord.com/invite/86yVsMVN9z">My Discord</a></li>
                        </ul>
                    </Popup>
                </section>
            </main>
        </div>
    )
}
