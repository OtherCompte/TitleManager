import { combineReducers, createStore } from "redux";
import UserReducer from "../reducers/UserReducer";

// Concat all Reducer on rootReducer
const rootReducer = combineReducers({

    // User Gestion
    UserReducer
    
})

// Create store with rootReducer
const store = createStore(rootReducer);

export default store;