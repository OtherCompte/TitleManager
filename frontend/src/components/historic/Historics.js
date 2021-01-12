import React from 'react'
import { useSelector } from "react-redux"
import HistoricTitle from "./HistoricTitle"

// La page qui stockera les résultats sauvegardés par l'utilisateur dans un nouveau tableau qui s'appelera historicTitles dans le reducer TitleReducer
export default function Historics() {


    // Import de l'historique des titles enregistrés sur le TitleReducer
    // Ce tableau garde en mémoires une liste d'objet comprenant :
    //  - Le keyword de recherche au moment de la sauvergarde
    //  - La date de la sauvegarde
    //  - Un tableau des titres enregistrés pour ce mot clé
    const { historicTitles } = useSelector(state => ({
        ...state.TitleReducer
    }))


    return (


        <div className="container mb-5">
            <h1 className="text-center mt-5">Votre sauvegarde en cours</h1>
            <div className="table-responsive mt-5">


                {/* Le tableau de la page Historic. Ce tableau affiche la liste 
                des recherches ainsi que leur date de sauvegarde */}

                <table className="table table-secondary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">
                                    Keyword
                                </th>
                                <th scope="col">
                                    Date
                                </th>
                            </tr>
                        </thead>


                        {/* Pour chaque élément de l'HistoricTitles, dont chaque sauvegarde
                        Nous affichons un objet HistoricTitle, qui est une ligne du tableau ci-dessus */}
                        
                        <tbody>
                        {historicTitles.map(listes => {
                            return(
                            <>
                                <HistoricTitle 
                                key={listes.id}
                                id={listes.id}
                                keyword={listes.keyword}
                                date={listes.date}
                                titles={listes.titles}
                                />
                            </>)
                        })}
                        </tbody>

                    </table>
            </div>
        </div>


    )
}
