import React from 'react'
import { useSelector } from "react-redux";

export default function Profil() {

    const { users, connectedUser } = useSelector(state => ({
        ...state.UserReducer
    }))

    const user = users.filter(user => user.id === connectedUser)[0]

    return (
        <div className="container text-center mt-5">
            <h1 style={{color: "grey"}}>Votre profil</h1>
            <div classNameName="row">
                <div className="mx-auto card bg-primary mt-3 p-2" style={{color: "white", width: "32rem"}}>
                    <div className="card-body">
                        <h4 className="card-title m-3">Votre pseudo : {user.pseudo}</h4>
                        <h5 className="card-subtitle m-3">Votre adresse mail : {user.email}</h5>
                        <h5 className="card-text m-3">Votre mot de passe : {user.password}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
