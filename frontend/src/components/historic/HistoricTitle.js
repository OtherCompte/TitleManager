import React, { useState } from 'react'

// La ligne du tableau HistoricTitle, servira à l'affichage de chaque sauvegarde
export default function HistoricTitle({ keyword, date, titles }) {

    // Le status, qui a true affichage la liste des titles pour cette sauvegarde en question
    const [ status, setStatus ] = useState(false)

    // La fonction qui permet de changer le status au click du bouton sort-down
    const changeStatus = () => {
        setStatus(!status)
    }

    return (
        <>
           <tr>
               {/* La cellule du mot clé, contenant le bouton de changement de status (affichage des titres) */}
                <th scope="row">
                    {keyword}
                    <i className="fas fa-sort-down ml-4 fa-2x" style={{cursor: "pointer", color: "red"}} onClick={changeStatus}></i>
                </th>
                <td>
                    {date}
                </td>
            </tr>
            {/*
            Si le status est true -> affiche la liste des titres
            sinon n'affiche rien 
            */}
            {status ? (
                <>
                {/* titles correspond ici à la liste des titles pour un mot clé parent */}
                {titles.map(title => {
                    return (<tr className="bg-primary">
                        <th scope="row">
                            {title.title}
                        </th>
                        <td>
                            {title.date}
                        </td>
                    </tr>)
                })}
                </>
            ) : null}
        </>
    )
}
