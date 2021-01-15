import React , {useState} from 'react'
import { useSelector } from "react-redux";
import ProfilDisplay from "../components/Profil/ProfilDisplay";
import ProfilUpdate from "../components/Profil/ProfilUpdate";


export default function Profil() {

    
    const { users, connectedUser } = useSelector(state => ({
        ...state.UserReducer
    }))


    const user = users.filter(user => user.id === connectedUser)[0]
    

    // Variable to know if we need to display UpdateProfilSettings or ProfilInformation
    const [ isUpdateProfil, setIsUpdateProfil ] = useState(false)


    // Switch between ProfilInformation and ProfilUpdateForm
    const changeIsUpdateProfil = () => {
        setIsUpdateProfil(!isUpdateProfil)
    }


    return (


        <div className="container-fluid">
            <div className="row">
                <h1 className="mx-auto pt-4">Profil Information</h1>
            </div>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    

                    {/* If user wanna update this profil settings we display ProfilUpdateForm
                    else display ProfilInformation -> past setIsUpdateProfil to ChildComponent*/}
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


                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>


    )
}
