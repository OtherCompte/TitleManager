import React from 'react'
import {useForm} from "react-hook-form";


export default function SearchForm() {


    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();


    // OnSubmitForm -> do the search and dispatch data
    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="container pt-2">

            <div className="row">
                <div className="col-md-2 col-sm-1 col-xs-1"></div>

                <div className="col-md-8 col-sm-10 col-xs-10">


                    {/* onSubmit -> réalise la recherche vers l'API et Axios puis ajoute les résultats aux tableau titles du TitleReducer */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        

                        {/* Display campaign option */}
                        {/* <div className="mb-3 text-center">


                        <label for="exampleDataList" className="form-label">Datalist example</label>
                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        <datalist id="datalistOptions" >
                            <option value="abc" />
                            <option value="abc" />
                        </datalist>


                        </div> */}
                    
                        <div className="mb-3 text-center">


                            {/* Le mot clé de recherche */}
                            <label className="form-label pb-2">Mot clé de recherche</label>
                            <input placeholder="Votre mot clé" ref={register} type="text" name="keyword" className="form-control" />
                        
                        
                        </div> 
 

                        <div className="row pt-2">
                            {/*SUBMIT*/}
                            <button className="btn btn-dark mx-auto">Rechercher</button>
                        </div>

                        
                    </form>

                </div>
                <div className="col-md-2 col-sm-1 col-xs-1"></div>
            </div>
        </div>
    )
}
