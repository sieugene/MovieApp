import { GenresAPI } from "../Api/api";

const GET_GENRES = 'GET_GENRES';


let initialState = {
    genreList: []
}
export const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genreList: action.genreList
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


export const setGenresTC = () => async(dispatch) => {
    try {
        let promise = await GenresAPI.movieList()
        dispatch(setGenresAC(promise.data));
        console.log(promise)
    } catch (err) {
        console.log(err)
    }
}