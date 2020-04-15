import { MoviesAPI } from "../Api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES'
const SEARCH = 'SEARCH'
const CURRENT_MOVIE = 'CURRENT_MOVIE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_LOADER = 'MOVIES/TOGGLE_LOADER';

let initialState = {
    popularMovies: {
        results: [],
        page: 0,
        total_results: 0,
        total_pages: 0
    },
    search: '',
    currentMovie: [],
    currentPage: 1,
    loading: false
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
        case TOGGLE_LOADER:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

export const toggleLoading = (loading) => {
    return {
        type: TOGGLE_LOADER,
        loading
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
        dispatch(toggleLoading(true));
        let promise = await MoviesAPI.search(text)
        dispatch(setPopularMovies(promise.data));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}
export const setPopularMoviesTC = (page) => async(dispatch) => {
    try {
        dispatch(toggleLoading(true));
        let promise = await MoviesAPI.getPopular(page)
        dispatch(setPopularMovies(promise.data));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}
export const getCurrentMovieTC = (filmId) => async(dispatch) => {
    try {
        dispatch(toggleLoading(true));
        let promise = await MoviesAPI.getCurrentMovie(filmId)
        dispatch(getCurrentMovieAC(promise.data));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}
export const setCurrnetPageTC = (page) => async(dispatch) => {
    try {
        dispatch(toggleLoading(true));
        dispatch(setCurrentPage(page));
        let promise = await MoviesAPI.getPopular(page)
        dispatch(setPopularMovies(promise.data));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}