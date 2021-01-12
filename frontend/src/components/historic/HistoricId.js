import React from 'react'
import { useSelector } from "react-redux"

export default function HistoricId({ match }) {

    const { historicTitles } = useSelector(state => ({
        ...state.TitleReducer
    }))

    let historic = historicTitles.filter(historic => {
        return(historic.id === match.params.id)
    })

    return (
        <div className="container mt-5">
            {historic[0].titles.map(title => {
                return(
                    <>
                    <h2>{title.title}</h2>
                    <p>----------------------</p>
                    </>
                )
            })}
        </div>
    )
}
