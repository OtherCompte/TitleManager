import React from 'react'

export default function TitleList() {
    return (
        <>
            <tr>
                <th scope="row">
                    Un titre qui est vraiment long pour voir si le tableau va bien bouger
                </th>
                <td>
                    <i class="fas fa-times" style={{color: "red", cursor: "pointer"}}></i>
                </td>
            </tr>
        </>
    )
}
