import { MoviesAPI } from "../Api/api";

const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
const SET_CURRENT_PAGE_REC = 'SET_CURRENT_PAGE_REC'

let initialState = {
    recommendation: [],
    page: 1
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
        default:
            return state
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
        let promise = await MoviesAPI.getRecommendations(filmId, currnetPage)
        dispatch(setRecommendationsAC(promise.data));
        console.log(promise)
    } catch (err) {
        console.log(err)
    }
}

export const setCurrnetPageRecTC = (currnetPage) => async(dispatch) => {
    try {
        dispatch(setCurrentRecPage(currnetPage));
    } catch (err) {
        console.log(err)
    }
}