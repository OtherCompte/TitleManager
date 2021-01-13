import React, { useState } from 'react'
import Login from "./Login";
import SignIn from "./SignIn";

export default function NonConnected({ conUser }) {

    const [ isRegister, setIsRegister ] = useState(true)

    const changeRegister = () => {
        setIsRegister(!isRegister)
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Welcome on SEO Title Generator !</h1>
            <div className="card mb-3 mt-5">
                <div className="card-body">
                    <h2 className="card-title">À quoi sert l'outil ?</h2>
                    <p className="card-text">L'outil vous permet de récupérer, à partir de votre clé API Youtube et un mot clé, une liste de titres Youtube récupérés depuis la Youtube DATA v3 API</p>
                </div>
                {isRegister ? (
                    <>
                        <Login 
                        changeRegisteR={changeRegister}
                        connect={conUser}
                        />
                    </>
                ) : (
                    <>
                        <SignIn 
                        changeRegisteR={changeRegister}
                        />
                    </>
                )}
            </div>
        </div>  
    )
}
