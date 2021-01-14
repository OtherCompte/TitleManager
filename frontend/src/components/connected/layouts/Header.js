import React from 'react'
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux"

export default function Header({ user, discUser}) {

    const dispatch = useDispatch();

    // Function to start LOGOUT and discUser Hook in App to refresh
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
                    <Link className="navbar-brand" to="/">TitleManager</Link>
                    <ul className="nav">


                        {/* Message on Header*/}
                        <li className="nav-item mr-4">
                            <Link style={{color: "white"}} to="/">
                               Hey {user.pseudo} ! Welcome to your Dashboard !
                            </Link>
                        </li>


                        {/* Nav Disconnect Item */}
                        <li className="nav-item">
                            <i className="fas fa-sign-out-alt" onClick={disconnect} style={{cursor: "pointer", color:"white"}}><span className="ml-2">Disconnect</span></i>  
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    )
}
