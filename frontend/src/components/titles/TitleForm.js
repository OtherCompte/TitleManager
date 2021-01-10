import React from 'react'

export default function TitleForm() {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Clé Api</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mot clé</label>
                    <input type="text" className="form-control" />
                </div> 
                <button className="btn btn-dark">Ajouter</button>
            </form>
        </div>
    )
}
