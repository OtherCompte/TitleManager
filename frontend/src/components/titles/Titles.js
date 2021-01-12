import React from 'react'
import TitleForm from "./TitleForm";
import { useSelector, useDispatch } from "react-redux"
import Title from "./Title";
import CsvDownloader from "react-csv-downloader";
import { v4 as uuidv4} from "uuid";

// La page Titles qui s'affichera à l'url /titles 
// affichant :
//  - le formulaire de recherche
//  - Le tableau des titres non sauvegardés
//  - Le tableau des titres sauvegardés
export default function Titles() {


    // Import des titres pour l'affichage dans le tableau des titres non sauvegardés
    // saveTitles pour l'affichage dans le tableau des titres non sauvegardés
    const { searchForm, titles, saveTitles } = useSelector(state => ({
        ...state.TitleReducer
    }))

    const dispatch = useDispatch();


    // Supprime un titre dans le tableau titles
    // et donc dans le tableau des titles non sauvegardés
    const deleteTitle = (id) => {


        // Filtre pour récupérer tous les titres sauf le titre avec l'id en paramètre
        // Envoie vers le reducer le nouveau tableau titles
        dispatch({
            type: "DELETE_TITLE",
            payload: titles.filter(title => title.id !== id)
        })


    }


    // Supprime un titre dans le tableau saveTitles
    // et donc dans le tableau des titles sauvegardés
    const deleteSaveTitle = (id) => {

        
        // Filtre pour récupérer tous les titres sauf le titre avec l'id en paramètre
        // Envoie vers le reducer le nouveau tableau saveTitles
        dispatch({
            type: "DELETE_SAVE_TITLE",
            payload: saveTitles.filter(title => title.id !== id)
        })


    }


    // Fait passer un titre non sauvegardé du tableau titles au tableau saveTitles
    // et de ce fait passe du tableau non sauvegardé au tableau sauvegardé
    const ajouterTitle = (id) => {


        // Récupére le titre qui a l'id du paramètre dans le tableau titles
        const newTitles = titles.filter(title => title.id === id)
        // Génére une date d'ajout pour l'affichage dans le tableau sauvegardé {date ?}
        newTitles[0].date = new Date().toLocaleString()


        // Envoie l'élément concaténé avec le tableau des titles sauvegardés pour sauvegarder le titre
        dispatch({
            type: "ADD_TITLE",
            payload: [...newTitles, ...saveTitles]
        })

        // Supprime le title dans le tableau titles
        deleteTitle(id)


    }


    // Ajoute la liste des saveTitles au state HistoricTitle afin de les garder en mémoire
    // envoie un objet contenant :
    //   - un id géneré
    //   - le mot clé de recherche au moment de la sauvegarde
    //   - la date de la sauvegarde
    //   - et la liste des mots clés dans le state saveTitles
    const saveHistoric = () => {


        // Envoie de l'élément vers le TitleReducer
        dispatch({
            type: "SAVE_IN_HISTORIC_TITLE",
            payload: {
                id: uuidv4(),
                keyword: searchForm.keyword,
                date: new Date().toLocaleString(),
                titles: saveTitles
            }
        })


    }

    let saveTitlesIsActive = "";

    if(saveTitles.length > 0) {
        saveTitlesIsActive = (
            <>
            {/* Bouton pour extraire la variable saveTitle en fichier CSV
            le fichier aura :
                - Le nom filename
                - Un separateur "," entre chaque colonne
                - N'a pas d'élément qui l'encercle, " ' " si on veux l'englober avec des guillemets
                - columns la gestion des colonnes du fichier qui doit être les mêmes que les champs des objets
                - Les données : dans le cas présent la liste des titres sauvegardés */}
            <CsvDownloader
            filename="title_export"
            separator=";"
            wrapColumnChar="'"
            columns = {[
                {
                    id: "id",
                    displayName: "id"
                },
                {
                    id: "title",
                    displayName: "Title"
                },
                {
                    id: "date",
                    displayName: "Date"
                }
            ]}
            datas={saveTitles}
            >
                <button className="btn btn-primary" style={{float: "right"}}>Extraire en CSV</button> 
            </CsvDownloader>

            
            {/* Le bouton pour Sauvegarder les données dans le HistoricTitles du TitleReducer*/}
            <button className="btn btn-success mr-4" style={{float: "right"}} onClick={saveHistoric}>Sauvegarder</button></>)
    }


    return (
        <div className="container mb-5">
            <h1 className="text-center mt-5">L'outil de recherche</h1>


            {/* Le formulaire de recherche des titres -> apiKey, keyword */}
            <TitleForm />

            {/* Le tableau des titles non sauvegardés -> basé sur le state titles du TitleReducer */}
            <div className="table-responsive mt-5">
                <h3 className="mt-4">Titre recherché - non sauvegardé</h3>       
                <table className="table table-secondary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                Title
                            </th>
                            <th scope="col">
                                Sauvegarder
                            </th>
                            <th scope="col">
                                Supprimer
                            </th>
                        </tr>
                    </thead>
                    <tbody>


                    {/* 
                        affiche une ligne dans le tableau pour chaque item dans le state titles du TitleReducer
                        fonction delTitle pour le bouton supprimer de la ligne
                        fonction addTitle pour le bouton ajouter de la ligne 
                    */}

                    {titles.map(title => {
                        return (
                            <Title
                            key={title.id}
                            id={title.id}
                            title={title.title}
                            delTitle={() => deleteTitle(title.id)}
                            addTitle={() => ajouterTitle(title.id)}
                            />
                        )
                    })}


                    </tbody>
                </table>
            </div>


            {/* 
                Le tableau des titles sauvegardés -> basé sur le state saveTitles du TitleReducer 
            */}

            <div className="table-responsive mt-5">
            <h3>Titre recherché et sauvegardé</h3> 
                <table className="table table-primary table-striped">
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


                    {/* 
                        affiche une ligne dans le tableau pour chaque item dans le state saveTitles du TitleReducer
                        fonction delSaveTitle pour le bouton supprimer de la ligne 
                    */}
                    {saveTitles.map(title => {
                        return (
                            <Title
                            key={title.id}
                            id={title.id}
                            title={title.title}
                            date={title.date}
                            delSaveTitle={() => deleteSaveTitle(title.id)}
                            />
                        )
                    })}


                    </tbody>
                </table>
                

                {/* Affichage conditionelle, si saveTitles est vide il affiche ""
                 sinon il affiche le button extraire et le bouton sauvegarder*/}
                
                {saveTitlesIsActive}


            </div>
        </div>
    )
}
