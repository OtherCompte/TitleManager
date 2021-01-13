import React from 'react'
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux"

export default function Header({ user, discUser}) {

    const dispatch = useDispatch();

    {}
    const disconnect = () => {

        // LOGOUT remove id in connectedUser state
        dispatch({
            type: "LOGOUT",
            payload: ""
        })
        
        // disconnectUser function on ParentComponent -> App
        discUser()
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand">Dashboard</Link>
                    <ul className="nav">


                        {/* Message on Header*/}
                        <li className="nav-item mr-4">
                            <Link style={{color: "white"}} to="/">
                               Hey {user.pseudo} ! Welcome to your Dashboard !
                            </Link>
                        </li>


                        {/* Nav Search Item */}
                        <li className="nav-item">
                            <Link className="fas fa-search mr-3" style={{cursor: "pointer", color:"white"}} to="/search"></Link>
                        </li>


                        {/* Nav Manager Item */}
                        <li className="nav-item">
                            <Link className="fas fa-cloud mr-3" style={{cursor: "pointer", color:"white"}} to="/manager"></Link>
                        </li>


                        {/* Nav Profil Item */}
                        <li className="nav-item">
                            <Link className="fas fa-user-circle mr-3" style={{cursor: "pointer", color:"white"}} to="/profil"></Link>
                        </li>


                        {/* Nav Disconnect Item */}
                        <li className="nav-item">
                            <i className="fas fa-sign-out-alt" onClick={disconnect} style={{cursor: "pointer", color:"white"}}></i>  
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    )
}
