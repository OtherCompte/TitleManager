import { combineReducers, createStore } from "redux";
import TitleReducer from "../reducers/TitleReducer";

const rootReducer = combineReducers({
    TitleReducer
})

const store = createStore(rootReducer);

export default store;