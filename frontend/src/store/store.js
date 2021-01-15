import { combineReducers, createStore } from "redux";
import UserReducer from "../reducers/UserReducer";
import CampagneReducer from "../reducers/CampagneReducer";

// Concat all Reducer on rootReducer
const rootReducer = combineReducers({

    
    // User Gestion
    UserReducer,

    // Campaign Gestion
    CampagneReducer
    

})


// Create store with rootReducer
const store = createStore(rootReducer);


export default store;