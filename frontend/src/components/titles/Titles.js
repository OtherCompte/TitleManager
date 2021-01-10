import React from 'react'
import TitleForm from "./TitleForm";
import TitleList from "./TitleList";

export default function Titles() {
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
                        <TitleList />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
