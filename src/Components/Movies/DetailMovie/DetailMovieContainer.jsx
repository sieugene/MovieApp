import React, { useEffect, useState } from 'react'
import DetailMovie from './DetailMovie'
import { connect } from 'react-redux'
import { getCurrentMovieTC } from '../../../Redux/moviesReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Preloader from '../../Preloader/Preloader'


const DetailMovieContainer = (props) => {
    const[loading,toggle] = useState(true);
    let filmId = props.match.params.filmId
    useEffect(() => {
        async function fetchData() {
            await props.getCurrentMovieTC(filmId);
            window.scrollTo(0, 0)
            toggle(false);
        }
        fetchData();
    }, [props.match.params.filmId])
    if(loading){
        return <Preloader/>
    }
    return (
        <DetailMovie currentMovie={props.currentMovie}/>
    )
}

let mapStateToProps = (state) => {
    return {
        currentMovie: state.movies.currentMovie,
        loading: state.movies.loading
    }
}

export default compose(connect(mapStateToProps, {
    getCurrentMovieTC
}),
    withRouter
)(DetailMovieContainer)