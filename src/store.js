import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { noteReducer } from "./noteReducer"

const reducer = combineReducers({
    jinal: noteReducer
});
var today = new Date();

let initialState = {
    jinal: {
        notes: localStorage.getItem("NoteX") ? JSON.parse(localStorage.getItem("NoteX")) : [{
            id: -1, text: "Temporary text", time: "Created Time: " +
                today.getHours() +
                ":" +
                today.getMinutes() +
                ":" +
                today.getSeconds()
            , date: "Created Date :" +
                today.getDate() +
                "/" +
                today.getMonth() +
                "/" +
                today.getFullYear()
        }],
        id: localStorage.getItem("NoteXID") ? JSON.parse(localStorage.getItem("NoteXID")) : 0
    }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;