import React from 'react'
import TitleForm from "./TitleForm";
import { useSelector, useDispatch } from "react-redux"
import Title from "./Title";

export default function Titles() {

    const { titles, saveTitles } = useSelector(state => ({
        ...state.TitleReducer
    }))

    const dispatch = useDispatch();

    const deleteTitle = (id) => {
        const newTitles = titles.filter(title => title.id !== id)
        dispatch({
            type: "DELETE_TITLE",
            payload: newTitles
        })
    }

    const deleteSaveTitle = (id) => {
        const newTitles = saveTitles.filter(title => title.id !== id)
        dispatch({
            type: "DELETE_SAVE_TITLE",
            payload: newTitles
        })
    }

    const ajouterTitle = (id) => {
        const newTitles = titles.filter(title => title.id === id)
        newTitles[0].date = new Date().toLocaleString()
        dispatch({
            type: "ADD_TITLE",
            payload: [...newTitles, ...saveTitles]
        })
        deleteTitle(id)
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">L'outil de recherche</h1>
            <TitleForm />
            <div className="table-responsive mt-5">
                <h3 className="mt-4">Titre recherché - non sauvegardé</h3>       
                <table className="table table-secondary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                Title
                            </th>
                            <th scope="col">
                                Sauvegarder
                            </th>
                            <th scope="col">
                                Supprimer
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {titles.map(title => {
                        return (
                            <Title
                            key={title.id}
                            id={title.id}
                            title={title.title}
                            delTitle={() => deleteTitle(title.id)}
                            addTitle={() => ajouterTitle(title.id)}
                            />
                        )
                    })}
                    </tbody>
                </table>
            </div>      
            <div className="table-responsive mt-5">
            <h3>Titre recherché et sauvegardé</h3> 
                <table className="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                Title
                            </th>
                            <th scope="col">
                                Supprimer
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {saveTitles.map(title => {
                        return (
                            <Title
                            key={title.id}
                            id={title.id}
                            title={title.title}
                            date={title.date}
                            delSaveTitle={() => deleteSaveTitle(title.id)}
                            />
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
