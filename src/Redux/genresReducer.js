import { GenresAPI } from "../Api/api";

const GET_GENRES = 'GET_GENRES';
const TOGGLE_LOADER = 'REC/TOGGLE_LOADER';


let initialState = {
    genreList: [],
    loading: false
}
export const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genreList: action.genreList
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


export const setGenresAC = (genreList) => {
    return {
        type: GET_GENRES,
        genreList
    }
}
export const toggleLoading = (loading) => {
    return {
        type: TOGGLE_LOADER,
        loading
    }
}


export const setGenresTC = () => async(dispatch) => {
    try {
        dispatch(toggleLoading(true));
        let promise = await GenresAPI.movieList()
        dispatch(setGenresAC(promise.data));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}