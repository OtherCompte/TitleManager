import React from 'react'
import { useSelector } from "react-redux";

export default function Manager() {

    const { users, connectedUser } = useSelector(state => ({
        ...state.UserReducer
    }))

    const user = users.filter(user => user.id === connectedUser)[0]

    return (
        <div className="container text-center mt-5">
            <div classNameName="row">
                <div className="mx-auto card bg-primary mt-3 p-2" style={{color: "white", width: "32rem"}}>
                    <div className="card-body">
                        <h4 className="card-title m-3">La page MANAGER de {user.pseudo}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
