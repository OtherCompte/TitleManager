import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4} from "uuid";

export default function SignIn({ changeRegisteR }) {

    const [ emailExist, setEmailExist ] = useState(false)

    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();

    const { users } = useSelector(state => ({
        ...state.UserReducer
    }))
    
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const emailExist = users.filter(user => user.email === data.email)
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
            changeRegisteR()
            setEmailExist(false)
        } else {
            setEmailExist(true)
        }
    }

    return (
        <div className="container">
            <h3>Formulaire d'inscription</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <div className="mb-3">


                    {/* Le pseudo */}
                    <label className="form-label">Pseudo</label>
                    <input ref={register} placeholder="Votre pseudo" type="text" name="pseudo" className="form-control" />
                
                
                </div>
                <div className="mb-3">


                    {/* L'email */}
                    <label className="form-label">Email</label>
                    <input ref={register} placeholder="Votre email" type="email" name="email" className="form-control"/>
                    {emailExist ? (
                        <div class="mt-3 alert alert-danger" role="alert">
                        Cette adresse email existe déjà dans notre base
                      </div>
                    ) : null}
                
                </div>
                <div className="mb-3">


                    {/* Le mot de passe*/}
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} placeholder="Votre mot de passe" type="password" name="password" className="form-control"/>

                
                </div> 


                {/*SUBMIT*/}
                <button className="btn btn-dark" style={{float: "right"}}>S'inscrire</button>

                
            </form>
            <button className="mb-4 btn btn-primary" onClick={() => changeRegisteR()}>Je suis déjà inscrit !</button>
        </div>
    )
}
