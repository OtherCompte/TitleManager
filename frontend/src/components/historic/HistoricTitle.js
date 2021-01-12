import React from 'react'
import { Link } from "react-router-dom"

// La ligne du tableau HistoricTitle, servira à l'affichage de chaque sauvegarde
export default function HistoricTitle({ id, keyword, date, titles }) {

    const link = "/historic/" + id

    return (
        <>
           <tr>


               {/* La cellule du mot clé, contenant le bouton de changement de status (affichage des titres) */}
                <th scope="row">
                    {keyword}
                </th>
                <td>
                    <Link to={link}>Accèder</Link>
                </td>
                <td>
                    {date}
                </td>
            </tr>
        </>
    )
}
