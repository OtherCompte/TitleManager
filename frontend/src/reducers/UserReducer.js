const INITIAL_STATE = {

    // Id of User who are connected
    connectedUser : "",

    // List of UserRegister
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

        // Save UserWhoRegister to UsersList
        case "REGISTER":
            return {
                ...state,
                users: [
                    action.payload,
                    ...state.users
                ]
            }

        // Save UserWhoLogin ID to connectedUser state
        case "LOGIN":
            return {
                ...state,
                connectedUser: action.payload
            }

        // Save empty value in the connectedUser state
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