import React from 'react'

export default function Home() {
    return (
        <div className="container mt-5">
            <h1 className="">Welcome on SEO Title Generator !</h1>
            <div className="card mb-3 mt-5">
                <div className="card-body">
                    <h2 className="card-title">À quoi sert l'outil ?</h2>
                    <p className="card-text">L'outil vous permet de récupérer, à partir de votre clé API Youtube et un mot clé, une liste de titres Youtube récupérés depuis la Youtube DATA v3 API</p>
                    <p className="card-text">Rien de compliquer pour le moment me direz vous. La force de l'outil est qu'il passe par une couche Python permettant de traduire le mot clé et de rechercher les résultats dans différentes langues</p>
                    <p className="card-text">Il est intéressant, dans le cas ou votre thématique est une thématique forte à l'étranger de passer par des titres de cette langue en particulier où les titres seo ont plus de chance d'être optimisé</p>
                </div>
            </div>
        </div>
    )
}
