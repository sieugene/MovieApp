import { MoviesAPI } from "../Api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES'
const SEARCH = 'SEARCH'
const CURRENT_MOVIE = 'CURRENT_MOVIE'

let initialState = {
    popularMovies: {
        results: [],
        page: 0,
        total_results: 0,
        total_pages: 0
    },
    search: '',
    currentMovie: []
}
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.movies
            }
        case CURRENT_MOVIE:
            {
                return {
                    ...state,
                    currentMovie: action.currentMovie
                }
            }
        default:
            return state
    }
}


export const setMoviesAC = (movies) => {
    return {
        type: SET_MOVIES,
        movies
    }
}
export const setPopularMovies = (movies) => {
    return {
        type: SET_POPULAR_MOVIES,
        movies
    }
}
export const search = (text) => {
    return {
        type: SEARCH,
        text
    }
}
export const getCurrentMovieAC = (movie) => {
    return {
        type: CURRENT_MOVIE,
        movie
    }
}


export const searchTC = (text) => async(dispatch) => {
    try {
        let promise = await MoviesAPI.search(text)
        dispatch(setPopularMovies(promise.data));
        console.log(promise)
    } catch (err) {
        console.log(err)
    }
}
export const setPopularMoviesTC = (page) => async(dispatch) => {
    try {
        let promise = await MoviesAPI.getPopular(page)
        dispatch(setPopularMovies(promise.data));
        console.log(promise)
    } catch (err) {
        console.log(err)
    }
}
export const getCurrentMovieTC = (filmId) => async(dispatch) => {
    try {
        let promise = await MoviesAPI.getCurrentMovie(filmId)
        dispatch(getCurrentMovieAC(promise.data));
        console.log(promise)
    } catch (err) {
        console.log(err)
    }
}