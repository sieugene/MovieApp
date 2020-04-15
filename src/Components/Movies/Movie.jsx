import React from 'react';
import './Movie.css'
import { NavLink } from 'react-router-dom';
import Genres from '../Genres/Genres';
import StarIcon from '../Helpers/StarIcon';

const Movie = (props) => {

   
    const movieBack = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.backdrop_path})`,
    }
    return (
        <div className={'movie'}>
            <NavLink exact to={`/detail/${props.id}/page/1`}>
                <div className={"movie__back"} style={movieBack}></div>
                <h5 className='truncate'>{props.title}</h5>
                <div className="row">
                    <div className="col">
                        {props.release_date}
                    </div>
                    <div className="col">
                        <StarIcon count={props.vote_average}/>{props.vote_average}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Genres genre_ids={props.genre_ids} genresList={props.genresList}/>
                    </div>
                </div>
            </NavLink>
        </div>

    )
}

export default Movie