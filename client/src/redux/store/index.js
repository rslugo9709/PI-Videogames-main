import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "../reducer/reducer";


export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)