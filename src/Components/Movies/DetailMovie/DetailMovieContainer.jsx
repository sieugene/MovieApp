import React, { useEffect } from 'react'
import DetailMovie from './DetailMovie'
import { connect } from 'react-redux'
import { getCurrentMovieTC } from '../../../Redux/moviesReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'


const DetailMovieContainer = (props) => {
    let filIm = props.match.params.filmId
    useEffect(() => {
        async function fetchData() {
            const response = await props.getCurrentMovieTC(filIm);
        }
        fetchData();
    }, [])
    return (
        <DetailMovie />
    )
}

let mapStateToProps = (state) => {
    return {
        currentMovie: state.movies.currentMovie
    }
}

export default compose(connect(mapStateToProps, {
    getCurrentMovieTC
}),
    withRouter
)(DetailMovieContainer)