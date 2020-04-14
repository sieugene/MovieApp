import React from 'react';
import StarIcon from '../../Helpers/StarIcon';
import './DetailMovie.css'


const DetailMovie = (props) => {

    //filmId = props.id
    const movieBack = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280_and_h720_bestv2/${props.currentMovie.poster_path})`,
    }
    
    return (
        <div className='detailMovie'>
            <div className="detailMovie__wrapper">
                <div className="detailMovie__backImg" style={movieBack}></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5><b>{props.currentMovie.original_title}/{props.currentMovie.title}</b></h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l3 xl3">
                            <StarIcon count={props.currentMovie.vote_average} />{props.currentMovie.vote_average}
                        </div>
                        <div className="col s12 m4 l3 xl3">
                            RunTime: {props.currentMovie.runtime} min
                        </div>
                        <div className="col s12 m4 l3 xl3">
                            Languages:<ul>{props.currentMovie.spoken_languages.map((l,index) => {
                            return <li key={index}>{l.name}</li>
                        })}</ul>
                        </div>
                        <div className="col s12 m4 l3 xl3">
                            Release Date: {props.currentMovie.release_date}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5><b>Overview</b></h5>
                            <p>
                                {props.currentMovie.overview}
                            </p>
                        </div>
                        <div className="col">
                            <b>Genres:</b> <ul>
                                {props.currentMovie.genres.map((g,index) => {
                                    return <li key={index}>
                                        {g.name}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailMovie