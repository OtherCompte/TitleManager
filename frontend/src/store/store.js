import { combineReducers, createStore } from "redux";
import TitleReducer from "../reducers/TitleReducer";

// Créer un seul et même réduceur
const rootReducer = combineReducers({
    TitleReducer
})

// Créer le store en implémentant les Reducers
const store = createStore(rootReducer);

export default store;