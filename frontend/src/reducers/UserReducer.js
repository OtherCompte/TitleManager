const INITIAL_STATE = {

    // UserConnected
    connectedUser : "",

    // User database
    users: [
        {
            id: "abc",
            pseudo: "felix",
            email: "fbouazza.pro@gmail.com",
            password: "felix",
            created_at: "date"
        }
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

        // Save new ConnectedUser in the users state
        case "LOGIN":
            return {
                ...state,
                connectedUser: action.payload
            }

        // Save new ConnectedUser in the users state
        case "LOGOUT":
            return {
                ...state,
                connectedUser: action.payload
            }

        
        default:
            return state;
    }
}


export default UserReducer;