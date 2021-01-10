import React from 'react'

export default function Title({id, title, date, addTitle, delTitle, delSaveTitle}) {
    return (
        <>
        {/* Si une date est présente cela signifie que le titre a été sauvegardé
            Il doit donc respecter l'affichage du tableau sauvegardé qui ne contient pas
            le bouton Sauvegarder */}
        {date ? (<tr>
                <th scope="row">
                {title} 
                </th>
                <td>
                    <i className="fas fa-times" style={{color: "red", cursor: "pointer"}} onClick={delSaveTitle}></i>
                </td>
            </tr>): (

            /* Ici l'affichage du tableau non sauvegardé , avec le bouton supplémentaire pour le sauvegarder */
            <tr>
                <th scope="row">
                {title} 
                </th>
                <td>
                    <i className="fas fa-check" style={{color: "green", cursor: "pointer"}} onClick={addTitle}></i>
                </td>
                <td>
                    <i className="fas fa-times" style={{color: "red", cursor: "pointer"}} onClick={delTitle}></i>
                </td>
            </tr>
            )}
        </>
    )
}
