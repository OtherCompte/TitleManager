import React from 'react'
import { useSelector } from "react-redux";
import SearchForm from "../components/Search/SearchForm"

export default function Search() {

    const { users, connectedUser } = useSelector(state => ({
        ...state.UserReducer
    }))

    const user = users.filter(user => user.id === connectedUser)[0]

    return (
        <div className="container-fluid pt-4">
            {user.youtubeApiKey ? (
                <>
                    <SearchForm />
                </>
            ) : (
                <h2 className="text-center">
                Your youtubeApiKey is undefined
                </h2>
            )}
        </div>
    )
}
