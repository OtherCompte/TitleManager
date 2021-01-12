const INITIAL_STATE = {
    // Stocke le changement du formulaire de l'objet TitleForm
    // permet d'éxécuter la recherche mais également de récupérer le mot clé de recherche lors
    // de la sauvegarde dans HistoricTitle
    searchForm: {
        apiKey: "",
        keyword: ""
    },
    // Etat pour le tableau de recherché non sauvegardé
    titles: [
    ],
    // Etat pour le tableau de recherché sauvegardé
    // Ce tableau est dédié à l'extraction en CSV sur la page titles
    // Chaque tableau sera ajouté dans un tableau historicTitles pour la page Historic
    saveTitles: [
    ],
    // Etat pour le tableau des historics
    // Ce tableau est dédié à l'affichage des listes sauvegardés sur la page Historic
    // Chaque sous tableau sera affiché dans un tableau dans la PageHistoric
    historicTitles: [
    ]
}

function TitleReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "UPDATE_FORM":
            return {
                ...state,
                searchForm: action.payload
            }
        // Supprimer un titre de la liste titre non sauvegardé
        case "DELETE_TITLE":
            return {
                ...state,
                titles: action.payload
            }
        // Supprimer un titre de la liste titre sauvegardé    
        case "DELETE_SAVE_TITLE":
            return {
                ...state,
                saveTitles: action.payload
            }
        // Ajouter un titre dans la liste titre sauvegardé 
        case "ADD_TITLE":
            return {
                ...state,
                saveTitles: action.payload
            }
        // Recherche de titre, ajoute les titres trouvés dans la requête à la liste titles
        case "SEARCH_TITLE":
            return {
                ...state,
                titles: action.payload
            }
        // Enregistre la liste des titres enregistrés dans un historique
        // Remet les valeurs de la page Title à neuf
        // On ne laisse que la clé 
        case "SAVE_IN_HISTORIC_TITLE":
            return {
                searchForm: { 
                    keyword: "",
                    apiKey: state.searchForm.apiKey
                },
                titles: [],
                saveTitles: [],
                historicTitles: [
                    action.payload,
                    ...state.historicTitles
                ]
            }
        default:
            return state
    }
}

export default TitleReducer;