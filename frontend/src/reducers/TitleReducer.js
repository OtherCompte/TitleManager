const INITIAL_STATE = {
    // Etat pour le tableau de recherché non sauvegardé
    titles: [
    ],
    // Etat pour le tableau de recherché sauvegardé
    // Ce tableau est dédié à l'extraction en CSV sur la page titles
    // Chaque tableau sera ajouté dans un tableau historicTitles pour la page Historic
    saveTitles: [
    ]
}

function TitleReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
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
        default:
            return state
    }
}

export default TitleReducer;