import React, {useState} from 'react'
import { useSelector } from "react-redux";
import ProfilDisplay from "./ProfilDisplay";
import ProfilUpdate from "./ProfilUpdate";
export default function ProfilInformation() {

    const [ isUpdateProfil, setIsUpdateProfil ] = useState(false)

    const { users, connectedUser } = useSelector(state => ({
        ...state.UserReducer
    }))

    const user = users.filter(user => user.id === connectedUser)[0]

    const changeIsUpdateProfil = () => {
        setIsUpdateProfil(!isUpdateProfil)
    }

    return (
        <>
        {isUpdateProfil ? (
            <>
                <ProfilUpdate
                users={users}
                user={user} 
                changeIsUpdateProfil={changeIsUpdateProfil}
                />
            </>
        ) : (
            <>
                <ProfilDisplay 
                user={user}
                changeIsUpdateProfil={changeIsUpdateProfil}
                />
            </>
        )}
        </>
    )
}
