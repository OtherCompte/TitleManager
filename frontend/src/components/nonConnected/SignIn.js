import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4} from "uuid";

// This functionnalComponent take one parameter, changeRegister who can call to switch between LoginFORM and SignInFORM
export default function SignIn({ changeRegisteR }) {

    // emailExist uses for display or not display EmailError if Email exist in database
    const [ emailExist, setEmailExist ] = useState(false)

    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();

    const { users } = useSelector(state => ({
        ...state.UserReducer
    }))
    
    const dispatch = useDispatch();

    // FormSubmission
    const onSubmit = (data) => {

        // emailExist to know if a emailExist with the same submission email
        // if he doesn't match , add user to UserReducer with dispatch method
        // else he match , display "Email exist in database"
        const emailExist = users.filter(user => user.email === data.email || user.pseudo === data.pseudo)
        if(emailExist.length === 0) {
            dispatch({
                type: "REGISTER",
                payload: {
                    id: uuidv4(),
                    pseudo: data.pseudo,
                    email: data.email,
                    password: data.password,
                    created_at: new Date().toLocaleString()
                }
            })

            // Switch to LoginFORM
            changeRegisteR()

            // Remove Alert for "Email exist"
            setEmailExist(false)

        } else {

            // Display Alert "Email exist"
            setEmailExist(true)

        }
    }

    return (
        <div className="container">
            <h3>Formulaire d'inscription</h3>

            {/* onSubmission execute handleSubmit of ReactHookForm */}
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <div className="mb-3">


                    {/* PseudoINPUT */}
                    <label className="form-label">Pseudo</label>
                    <input ref={register} placeholder="Votre pseudo" type="text" name="pseudo" className="form-control" />
                
                
                </div>
                <div className="mb-3">


                    {/* EmailINPUT */}
                    <label className="form-label">Email</label>
                    <input ref={register} placeholder="Votre email" type="email" name="email" className="form-control"/>
                    {emailExist ? (
                        <div class="mt-3 alert alert-danger" role="alert">
                        Cette adresse email ou ce pseudo existe déjà dans notre base
                      </div>
                    ) : null}
                
                </div>
                <div className="mb-3">


                    {/* PasswordINPUT */}
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} placeholder="Votre mot de passe" type="password" name="password" className="form-control"/>

                
                </div> 


                {/* SUBMISSION BUTTON */}
                <button className="btn btn-dark" style={{float: "right"}}>S'inscrire</button>

                
            </form>

            {/* Switch to LoginFORM with changeRegister parentMETHOD */}
            <button className="mb-4 btn btn-primary" onClick={() => changeRegisteR()}>Je suis déjà inscrit !</button>
        </div>
    )
}
