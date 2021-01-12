import React from 'react'

export default function Historic({ title, date }) {
    return (
        <tr  className="bg-primary">
            <th scope="row">
                {title}
            </th>
            <td>
                {date}  
            </td>
        </tr>
    )
}
