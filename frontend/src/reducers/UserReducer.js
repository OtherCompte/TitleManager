const INITIAL_STATE = {


    // User database
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

        // Save new User in the users state
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