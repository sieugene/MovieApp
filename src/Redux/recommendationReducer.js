import { MoviesAPI } from "../Api/api";

const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
const SET_CURRENT_PAGE_REC = 'SET_CURRENT_PAGE_REC'
const TOGGLE_LOADER = 'RECOMEND/TOGGLE_LOADER';

let initialState = {
    recommendation: [],
    page: 1,
    loading: false
}
export const recommendationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECOMMENDATIONS:
            return {
                ...state,
                recommendation: action.recommendation
            }
        case SET_CURRENT_PAGE_REC:
            return {
                ...state,
                page: action.page
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
export const setRecommendationsAC = (recommendation) => {
    return {
        type: SET_RECOMMENDATIONS,
        recommendation
    }
}
export const setCurrentRecPage = (page) => {
    return {
        type: SET_CURRENT_PAGE_REC,
        page
    }
}

export const setRecommendationsTC = (filmId, currnetPage) => async(dispatch) => {
    try {
        dispatch(toggleLoading(true));
        let promise = await MoviesAPI.getRecommendations(filmId, currnetPage)
        dispatch(setRecommendationsAC(promise.data));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}

export const setCurrnetPageRecTC = (currnetPage) => async(dispatch) => {
    try {
        dispatch(toggleLoading(true));
        dispatch(setCurrentRecPage(currnetPage));
        dispatch(toggleLoading(false));
    } catch (err) {
        console.log(err)
        dispatch(toggleLoading(false));
    }
}