import React from 'react'

// Le formulaire permettant de réaliser la recherche de mot clé depuis l'API Youtube Data v3
export default function TitleForm() {
    return (
        <div className="container">
            {/* onSubmit -> réalise la recherche vers l'API et Axios puis ajoute les résultats aux tableau titles du TitleReducer */}
            <form>
                <div className="mb-3">
                    {/* La clé API */}
                    <label className="form-label">Clé Api</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    {/* Le mot clé de recherche */}
                    <label className="form-label">Mot clé</label>
                    <input type="text" className="form-control" />
                </div> 
                <button className="btn btn-dark">Rechercher</button>
            </form>
        </div>
    )
}
