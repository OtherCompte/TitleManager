import React from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { v4 as uuidv4} from "uuid";

// Le formulaire permettant de réaliser la recherche de mot clé depuis l'API Youtube Data v3
export default function TitleForm() {
    
    // Hook Form for easy onSubmit
    const { register, handleSubmit } = useForm();

    // Import titles from TitleReducer for push newtitle with pre titles in dispatch payload
    // Import searchForm from TitleReducer for push apiKey and keyword in dispatch handleInputChange
    const { titles, searchForm } = useSelector(state => ({
        ...state.TitleReducer
    }))
    
    const dispatch = useDispatch();

    // À chaque modification du formulaire, cette fonction s'éxécute et renvoie la donnée modifié
    // vers le searchForm du TitleReducer, cela va permettre plusieurs manipulations,
    // notamment la sauvegarde du mot clé de recherche lors de l'activation de la fonction
    // saveHistoricTitle de l'object Titles
    const handleInputChange = (event) => {
        searchForm[event.target.name] = event.target.value
        dispatch({
            type: "UPDATE_FORM",
            payload: searchForm,
        })
    }
    
    // onSubmit function:
        // request youtube API
        // format data
        // push data in titles state in titleReducer
    const onSubmit = (data) => {

        // Construct url with form data
        const url = "https://www.googleapis.com/youtube/v3/search?maxResults=200&key=" + data.apiKey + "&part=snippet&q=" + data.keyword + '&type=video'

        //Request with axios
        axios.get(url)
            // Response
            .then((res) => {
                // Format data for respect reducerStructure
                const resTitles = res.data.items.map(video => {
                    return {
                        id: uuidv4(),
                        title: video.snippet.title,
                        date: ""
                    }
                })
                // Send data to titleReducer
                dispatch({
                    type: "SEARCH_TITLE",
                    payload: [...resTitles, ...titles]
                })
            //Reject, just console.log(error)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            {/* onSubmit -> réalise la recherche vers l'API et Axios puis ajoute les résultats aux tableau titles du TitleReducer */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    {/* La clé API */}
                    <label className="form-label">Clé Api</label>
                    <input ref={register} placeholder="AIzaSyCdFoLHCS9l_Q4..." value={searchForm.apiKey} type="text" name="apiKey" className="form-control" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    {/* Le mot clé de recherche */}
                    <label className="form-label">Mot clé</label>
                    <input ref={register} placeholder="Votre mot clé" value={searchForm.keyword} type="text" name="keyword" className="form-control" onChange={handleInputChange}/>
                </div> 
                {/*SUBMIT*/}
                <button className="btn btn-dark">Rechercher</button>
            </form>
        </div>
    )
}
