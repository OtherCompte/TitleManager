import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">SEOTitle Manager</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/titles">Titles</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
