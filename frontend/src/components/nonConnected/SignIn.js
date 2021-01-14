import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4} from "uuid";


// This functionnalComponent take one parameter, changeRegister who can call to switch between LoginFORM and SignInFORM
export default function SignIn({ changeRegisteR }) {


    // Variable to know is we need to display "You're register , you can LOGIN"
    const [ isRegister, setIsRegister] = useState(false)


    // emailExist uses for display or not display EmailError if Email exist in database
    const [ emailExist, setEmailExist ] = useState(false)


    // Variable to know if we need to display "Input Missed in the FormSubmission"
    const [ inputMissed, setInputMissed ] = useState(false)


    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();


    // usersList state in store -> userReducer
    const { users } = useSelector(state => ({
        ...state.UserReducer
    }))
    

    const dispatch = useDispatch();


    // FormSubmission
    const onSubmit = (data) => {


        // Check if data is missed in FormSubmissionData
        if(!data.pseudo || !data.email || !data.password) {


            //if missed display "Input missed in the form"
            setInputMissed(true)


            // Deactivate EmailExistMessage if he exist
            setEmailExist(false)


            return new Error("Un des champs n'est pas renseigné !")
        
        
        }


        // emailExist to know if a emailExist with the same submission email
        // if he doesn't match , add user to UserReducer with dispatch method
        // else he match , display "Email exist in database"
        const emailExist = users.filter(user => user.email === data.email || user.pseudo === data.pseudo)

        // If any correspondance, we can create this USER
        if(emailExist.length === 0) {


            // If data pass all test we can REGISTER to UserReducer state
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


            // Display "You're REGISTER, you can LOGIN !"
            setIsRegister(true);


            // Deactivate InputMissedMessage is he exist
            setInputMissed(false)


            // Remove Alert for "Email exist"
            setEmailExist(false)


        } else {


            // Deactivate InputMissedMessage is he exist
            setInputMissed(false)


            // Display Alert "Email exist" and remove isRegister message if exist
            setEmailExist(true)


            // Deactivate "You're register" if he exist
            setIsRegister(false);

        }
    }

    return (
        <div className="container" style={{maxWidth: "600px"}}>
            <h3 class="text-center mt-3 mb-4">Inscrivez-vous</h3>


            {/* Display UserCreationConfirmation if email and pseudo not exist in store -> state Users */}
            {isRegister ? (
                <div class="mt-3 alert alert-success" role="alert">
                    Votre compte a bien été crée, vous pouvez maintenant vous connecter pour accèder à votre <span style={{ fontWeight: 700}}>Dashboard</span>.
                </div>
            ) : null}


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
                    
                    
                
                </div>
                <div className="mb-3">


                    {/* PasswordINPUT */}
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} placeholder="Votre mot de passe" type="password" name="password" className="form-control"/>

                        
                </div> 


                {/* When InscriptionForm is submit. if email or pseudo exist 
                emailExist pass to true and this div is display in the form */}
                {emailExist ? (
                    <div class="mt-3 alert alert-danger" role="alert">
                    Cette adresse email ou ce pseudo existe déjà dans notre base
                    </div>
                ) : null}

                

                {/* Display "Input missed" if inputMissed variable is true */}
                {inputMissed ? (
                        <div class="mt-3 alert alert-danger" role="alert">
                        Un des champs du formulaire n'est pas renseigné
                      </div>
                ) : null}


                {/* SUBMISSION BUTTON */}
                <button className="btn btn-dark" style={{float: "right"}}>S'inscrire</button>

                
            </form>


            {/* Switch to LoginFORM with changeRegister parentMETHOD */}
            <button className="mb-4 btn btn-primary" onClick={() => changeRegisteR()}>Je suis déjà inscrit !</button>
            

        </div>
    )
}
