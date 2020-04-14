import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { movieReducer } from "./moviesReducer";


let reducers = combineReducers({
    movies: movieReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store