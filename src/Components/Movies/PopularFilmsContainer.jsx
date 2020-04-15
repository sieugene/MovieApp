import React from 'react';
import PopularFilms from './PopularFilms';
import { connect } from 'react-redux';
import { setPopularMoviesTC,searchTC, setCurrnetPageTC } from '../../Redux/moviesReducer';
import { setGenresTC } from '../../Redux/genresReducer';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';



const PopularFilmsContainer = (props) => {
    return (
        <PopularFilms {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        popularMovies: state.movies.popularMovies,
        genreList: state.genres.genreList,
        currentPage: state.movies.currentPage
    }
}

export default compose(connect(mapStateToProps, { 
    setPopularMoviesTC,searchTC,setGenresTC,setCurrnetPageTC}),
    withRouter
    )(PopularFilmsContainer)