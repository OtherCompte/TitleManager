import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux"

export default function Login({ connect, changeRegisteR }) {

    const [ userExist, setUserExist ] = useState(true)

    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();

    const { users } = useSelector(state => ({
        ...state.UserReducer
    }))
    
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const searchUser = users.filter(user => user.pseudo === data.pseudo && user.password === data.password)
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


                    {/* Le pseudo */}
                    <label className="form-label">Pseudo</label>
                    <input ref={register} placeholder="Votre pseudo" type="text" name="pseudo" className="form-control" />
                
                
                </div>

                <div className="mb-4">


                    {/* Le mot de passe*/}
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} placeholder="Votre mot de passe" type="password" name="password" className="form-control"/>
                
                
                </div> 
                {!userExist ? (
                    <div class="alert alert-danger" role="alert">
                    Cette utilisateur n'existe pas dans notre base
                  </div>
                ) : null}

                {/*SUBMIT*/}
                <button className="btn btn-dark" style={{float: "right"}}>Se connecter</button>

                
            </form>
            <button className="mb-5 btn btn-primary" onClick={() => changeRegisteR()}>Je ne suis pas encore inscrit !</button>
        </div>
    )
}
