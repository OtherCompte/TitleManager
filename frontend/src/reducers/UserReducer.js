const INITIAL_STATE = {
    users: [
        // {
        //     id: "un id",
        //     pseudo: "pseudo",
        //     email: "fbouazza.pro@gmail.com",
        //     password: "un mot de passe",
        //     created_at: "date"
        // }
    ]
}

function UserReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "REGISTER":
            return {
                ...state,
                users: [
                    action.payload,
                    ...state.users
                ]
            }
        default:
            return state;
    }
}

export default UserReducer;