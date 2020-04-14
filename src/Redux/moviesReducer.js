import { MoviesAPI } from "../Api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES'
const SEARCH = 'SEARCH'
const CURRENT_MOVIE = 'CURRENT_MOVIE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    popularMovies: {
        results: [],
        page: 0,
        total_results: 0,
        total_pages: 0
    },
    search: '',
    currentMovie: [],
    currentPage: 1
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
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
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
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
export const getCurrentMovieAC = (currentMovie) => {
    return {
        type: CURRENT_MOVIE,
        currentMovie
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
export const setCurrnetPageTC = (page) => async(dispatch) => {
    try {
        dispatch(setCurrentPage(page));
        let promise = await MoviesAPI.getPopular(page)
        dispatch(setPopularMovies(promise.data));
        console.log(promise)
    } catch (err) {
        console.log(err)
    }
}