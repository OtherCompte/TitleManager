const INITIAL_STATE = {
    titles: [
        {
            id: 1,
            title: "Un titre qui a la classe"
        },
        {
            id: 2,
            title: "Un autre titre qui a la classe"
        }
    ]
}

function TitleReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "DELETE_TITLE":
            return {
                ...state,
                titles: action.payload
            }
        default:
            return state
    }
}

export default TitleReducer;