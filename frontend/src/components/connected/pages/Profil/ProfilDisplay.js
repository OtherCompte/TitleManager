import React from 'react'

export default function ProfilDisplay({user, changeIsUpdateProfil}) {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">Pseudo</h5>
                <p className="card-text">{user.pseudo}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Email</h5>
                <p className="card-text">{user.email}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Mot de passe</h5>
                <p className="card-text">{user.password}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Youtube Api Key</h5>
                <p className="card-text">{user.youtubeApiKey ? (<>{user.youtubeApiKey}</>) : (<>Your Youtube Api Key is undefined.</>)}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Date de Création</h5>
                <p className="card-text">{user.created_at}</p>
            </div>
            <div className="card-body">
                <button className="btn btn-primary ml-2" style={{float: "right"}} onClick={changeIsUpdateProfil}>Modifier</button>  
            </div>
        </div>
    )
}
