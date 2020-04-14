import React from 'react';
import './Movie.css'
import { NavLink } from 'react-router-dom';

const Movie = (props) => {

    // id: 419704
    // backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
    // genre_ids: (2) [18, 878]
    // title: "Ad Astra"
    // vote_average: 6
    // release_date: "2019-09-17"

    const movieBack = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.backdrop_path})`,
    }

    return (
        <div className={'movie'}>
            <NavLink to={`detail/${props.id}`}>
                <div className={"movie__back"} style={movieBack}></div>
                <h5>{props.title}</h5>
                <div className="row">
                    <div className="col">
                        {props.release_date}
                    </div>
                    <div className="col">
                        {props.vote_average}
                    </div>
                </div>
            </NavLink>
        </div>

    )
}

export default Movie