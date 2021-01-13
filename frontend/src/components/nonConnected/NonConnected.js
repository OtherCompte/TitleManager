import React, { useState } from 'react'
import Login from "./Login";
import SignIn from "./SignIn";

export default function NonConnected({ conUser }) {

    // This state is declare to switch between Login and Sign In Form*
    const [ isRegister, setIsRegister ] = useState(true)

    // Function to inject in Children component to active and desactive isRegister state
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
                    <p className="card-text">Rien de compliquer pour le moment me direz vous. La force de l'outil est qu'il passe par une couche Python permettant de traduire le mot clé et de rechercher les résultats dans différentes langues</p>
                    <p className="card-text">Il est intéressant, dans le cas ou votre thématique est une thématique forte à l'étranger de passer par des titres de cette langue en particulier où les titres seo ont plus de chance d'être optimisé</p>
                </div>

                {/* If client is register display Login Form else display SignIn Form*/}
                {isRegister ? (
                    <>

                        {/* LoginForm -> past conUser fonction to change LoginPage to DashboardPage after Submit LoginForm */}
                        <Login 
                        changeRegisteR={changeRegister}
                        connect={conUser}
                        />
                    </>
                ) : (
                    <>
                        {/* SignIn Form to display if client isn't register */}
                        <SignIn 
                        changeRegisteR={changeRegister}
                        />
                    </>
                )}


            </div>
        </div>  
    )
}
