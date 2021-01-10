import React from 'react'

export default function Title({id, title, delTitle}) {
    return (
        <>
            <tr>
                <th scope="row">
                {title} 
                </th>
                <td>
                    <i className="fas fa-times" style={{color: "red", cursor: "pointer"}} onClick={delTitle}></i>
                </td>
            </tr>
        </>
    )
}
