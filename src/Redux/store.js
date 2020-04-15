import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { movieReducer } from "./moviesReducer";
import { genreReducer } from "./genresReducer";
import { recommendationReducer } from "./recommendationReducer";


let reducers = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    rec: recommendationReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store