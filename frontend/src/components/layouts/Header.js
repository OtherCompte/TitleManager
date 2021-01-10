import React from 'react'
import { Link } from "react-router-dom"

// Le header qui s'affichage sur toutes les pages 
export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">SEOTitle Manager</a>
                <ul className="nav justify-content-end">
                    {/* Lien vers la Homepage */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {/* Lien vers la page de l'outil de génération de titre */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/titles">Titles</Link>
                    </li>
                    {/* Lien vers la page Historic */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/historic">Historic</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
