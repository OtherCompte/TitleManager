import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function ProfilUpdate({users, user, changeIsUpdateProfil}) {


    const dispatch = useDispatch();


    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        

        // Find index of ConnectedUser to modify data in UsersList
        const isSameObj = (element) => element === user
        const index = users.findIndex(isSameObj)


        // Modify User who Connected with Form Data
        users[index] = {
            ...users[index],
            pseudo: data.pseudo,
            email: data.email,
            password: data.password,
            youtubeApiKey: data.youtubeApiKey
        }

        
        // Send new users list to STORE and UserReducerState
        dispatch({
            type: "UPDATE",
            payload: users
        })


        // To switch to ProfilInformationPage
        changeIsUpdateProfil()


    }

    return (
        <div className="card mt-4">
            <div className="card-body">


                {/* React Hook Form configuration*/}
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* Pseudo */}
                    <div className="mb-4">
                        <label className="form-label">Votre pseudo</label>
                        <input ref={register} defaultValue={user.pseudo} placeholder="Votre pseudo" type="text" name="pseudo" className="form-control" required/>
                    </div>


                    {/* Email */}
                    <div className="mb-4">
                        <label className="form-label">Votre email</label>
                        <input ref={register} defaultValue={user.email} placeholder="Votre email" type="email" name="email" className="form-control" required/>
                    </div>
                    

                    {/* Password*/}
                    <div className="mb-4">
                        <label className="form-label">Votre mot de passe</label>
                        <input ref={register} defaultValue={user.password} placeholder="Votre mot de passe" type="password" name="password" className="form-control" required/>
                    </div>


                    {/* YoutubeApiKey */}
                    <div className="mb-4">
                        <label className="form-label">Votre clé API Youtube</label>
                        <input ref={register} defaultValue={user.youtubeApiKey} placeholder="Votre clé API Youtube" type="text" name="youtubeApiKey" className="form-control" />
                    </div>


                    {/* Submit Form */}
                    <button className="btn btn-primary ml-2" style={{float: "right"}}>Enregister</button> 


                </form> 
            </div>
        </div>
    )
}
