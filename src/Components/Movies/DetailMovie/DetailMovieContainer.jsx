import React, { useEffect, useState } from 'react'
import DetailMovie from './DetailMovie'
import { connect } from 'react-redux'
import { getCurrentMovieTC } from '../../../Redux/moviesReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'


const DetailMovieContainer = (props) => {
    const[loading,toggle] = useState(true);
    let filmId = props.match.params.filmId
    useEffect(() => {
        async function fetchData() {
            await props.getCurrentMovieTC(filmId);
            toggle(false);
        }
        fetchData();
    }, [props.match.params.filmId])
    if(loading){
        return <div>Loading</div>
    }
    return (
        <DetailMovie currentMovie={props.currentMovie}/>
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