import axios from "axios";
const API_KEY = 'api_key=8ffead32759a85dce9ea6d40e5a6bf7f'
const baseURL = 'https://api.themoviedb.org/3/'


export const AuthenticationAPI = {
    authenticationTokenNew() {
        return axios.get(`authentication/token/new?${API_KEY}`)
    },
    authenticate(REQUEST_TOKEN) {
        return axios.get(`authenticate/${REQUEST_TOKEN}`)
    },
    authenticationSessionNew() {
        return axios.post(`authentication/session/new?${API_KEY}`)
    },
    guestSessionNew() {
        return axios.get(`authentication/guest_session/new?${API_KEY}`)
    }
}
export const GuestSessionsAPI = {
    ratedMovies(guest_session_id) {
        return axios.get(`guest_session/${guest_session_id}/rated/movies?${API_KEY}&language=en-US&sort_by=created_at.asc`)
    }

}

export const MoviesAPI = {
    getPopular(pageNumber) {
        return axios.get(`${baseURL}movie/popular?${API_KEY}&language=en-US&page=${pageNumber}`)
    },
    getCurrentMovie(filmId) {
        return axios.get(`${baseURL}movie/${filmId}?${API_KEY}&language=en-US`)
    },
    getRecommendations(filmId, currnetPage) {
        return axios.get(`${baseURL}movie/${filmId}?${API_KEY}&language=en-US&page=${currnetPage}`)
    },
    search(query) {
        return axios.get(`${baseURL}search/movie?${API_KEY}&query=${query}`)
    }
}

export const GenresAPI = {
    movieList() {
        return axios.get(`${baseURL}genre/movie/list?${API_KEY}&language=en-US`)
    }
}