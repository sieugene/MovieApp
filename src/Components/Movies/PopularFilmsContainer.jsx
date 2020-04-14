import React from 'react';
import PopularFilms from './PopularFilms';
import { connect } from 'react-redux';
import { setPopularMoviesTC,searchTC } from '../../Redux/moviesReducer';



const PopularFilmsContainer = (props) => {
    return (
        <PopularFilms {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        popularMovies: state.movies.popularMovies
    }
}

export default connect(mapStateToProps, { setPopularMoviesTC,searchTC })(PopularFilmsContainer)