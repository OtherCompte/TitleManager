import React from 'react'
import TitleForm from "./TitleForm";
import { useSelector, useDispatch } from "react-redux"
import Title from "./Title";

export default function Titles() {

    const { titles } = useSelector(state => ({
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

    return (
        <div className="container">
            <h1 className="text-center mt-5">L'outil de recherche</h1>
            <TitleForm />
            <div className="table-responsive mt-5">
                <table className="table table-dark table-striped">
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
                    {titles.map(title => {
                        return (
                            <Title
                            key={title.id}
                            id={title.id}
                            title={title.title}
                            delTitle={() => deleteTitle(title.id)}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
