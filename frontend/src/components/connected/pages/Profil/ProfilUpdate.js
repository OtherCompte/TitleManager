import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function ProfilUpdate({users, user, changeIsUpdateProfil}) {

    const dispatch = useDispatch();


    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
        const isSameObj = (element) => element === user
        const index = users.findIndex(isSameObj)

        users[index] = {
            ...users[index],
            pseudo: data.pseudo,
            email: data.email,
            password: data.password,
            youtubeApiKey: data.youtubeApiKey
        }
        dispatch({
            type: "UPDATE",
            payload: users
        })

        changeIsUpdateProfil()
    }

    return (
        <div className="card mt-4">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="form-label">Votre pseudo</label>
                        <input ref={register} defaultValue={user.pseudo} placeholder="Votre pseudo" type="text" name="pseudo" className="form-control" required/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Votre email</label>
                        <input ref={register} defaultValue={user.email} placeholder="Votre email" type="email" name="email" className="form-control" required/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Votre mot de passe</label>
                        <input ref={register} defaultValue={user.password} placeholder="Votre mot de passe" type="password" name="password" className="form-control" required/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Votre clé API Youtube</label>
                        <input ref={register} defaultValue={user.youtubeApiKey} placeholder="Votre clé API Youtube" type="text" name="youtubeApiKey" className="form-control" />
                    </div>

                    <button className="btn btn-primary ml-2" style={{float: "right"}}>Enregister</button> 
                </form> 
            </div>
        </div>
    )
}
