const INITIAL_STATE = {
    campagnes : [
        {
            id: "unid",
            title: "Un titre",
            created_at: "Une date"
        }
    ]
}

function CampagneReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "ADD_CAMPAGNE":
            return state;
        default:
            return state;
    }
}

export default CampagneReducer;
