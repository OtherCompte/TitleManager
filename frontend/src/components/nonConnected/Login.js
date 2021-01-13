import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux"


// This functionnalComponent take 2 parameters, first connect to send connection information to ParentAppComponent,
// second changeRegister to switch between Login and SignIn Page
export default function Login({ connect, changeRegisteR }) {

    // Variable who say if we need to display "Email exist" after bad submission
    const [ userExist, setUserExist ] = useState(true)

    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();

    const { users } = useSelector(state => ({
        ...state.UserReducer
    }))
    
    // LoginFORM submission
    const onSubmit = (data) => {

        // User exist in userReducer with submit pseudo and password ? pseudo and password correspondance
        const searchUser = users.filter(user => user.pseudo === data.pseudo && user.password === data.password)

        // If user Exist, connect this user to dashboard with ParentFunction connect - This function give one parameter, userID 
        // Else display "User doesn't exist" by changing UserExist state
        if(searchUser.length === 1) {
            connect(searchUser[0].id)
        } else {
            setUserExist(false)
        }

    }

    return (
        <div className="container">
            <h3 className="mb-3">Formulaire de connection</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <div className="mb-4">


                    {/* PseudoINPUT */}
                    <label className="form-label">Pseudo</label>
                    <input ref={register} placeholder="Votre pseudo" type="text" name="pseudo" className="form-control" />
                
                
                </div>

                <div className="mb-4">


                    {/* PasswordINPUT */}
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} placeholder="Votre mot de passe" type="password" name="password" className="form-control"/>
                
                
                </div> 

                {/* If checking user connection missing , this expression display a message to the client that says "This user doesn't exist"*/}
                {!userExist ? (
                    <div class="alert alert-danger" role="alert">
                    Cette utilisateur n'existe pas dans notre base
                  </div>
                ) : null}




                {/*SUBMIT*/}
                <button className="btn btn-dark" style={{float: "right"}}>Se connecter</button>

                
            </form>

            {/* Button to switch in to RegisterForm */}
            <button className="mb-5 btn btn-primary" onClick={() => changeRegisteR()}>Je ne suis pas encore inscrit !</button>
        </div>
    )
}
