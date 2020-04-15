import React, { useEffect, useState } from 'react';
import './Recommendation.css'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Recommendation from './Recommendation';
import { withRouter } from 'react-router-dom';
import { setRecommendationsTC, setCurrnetPageRecTC } from '../../Redux/recommendationReducer';
import { setGenresTC } from '../../Redux/genresReducer';

const RecommendationContainer = (props) => {
    const [loading, toggle] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await props.setRecommendationsTC(props.match.params.filmId, props.match.params.page);
            await props.setGenresTC();
            toggle(false);
        }
        fetchData();
    }, [props.match.params.page])
    if (loading) {
        return <div>Loading</div>
    }
    return (
        <Recommendation {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        recommendation: state.rec.recommendation,
        currentPageRec: state.rec.page,
        genreList: state.genres.genreList
    }
}

export default compose(connect(mapStateToProps, {
    setRecommendationsTC,
    setCurrnetPageRecTC,
    setGenresTC
}),
    withRouter
)(RecommendationContainer)