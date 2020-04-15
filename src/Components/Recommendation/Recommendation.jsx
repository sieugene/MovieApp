import React from 'react';
import './Recommendation.css'
import Paginator from '../Paginator/Paginator';
import Movie from '../Movies/Movie';
import Preloader from '../Preloader/Preloader';

const Recommendation = (props) => {
    const getMovies = props.recommendation.results.map((f) => {
        return <div className="col s12 m6 l4 xl3" key={f.id}>
            <Movie title={f.title}
                release_date={f.release_date}
                vote_average={f.vote_average}
                backdrop_path={f.backdrop_path}
                id={f.id}
                genresList={props.genreList.genres}
                genre_ids={f.genre_ids}
            />
        </div>
    })
    return (
        <>
        {props.loading ? <Preloader/> : ''}
            <div className="container">
                <div className='mt20'>
                    <div className="row">
                        <div className="col">
                            <h5 className='left-align'>Featured movies</h5>
                        </div>
                    </div>

                    <div className="row">
                        {getMovies}
                    </div>
                </div>
                <Paginator pageSize={props.recommendation.total_pages}
                    currentPage={props.match.params.page}
                    path={`/detail/${props.match.params.filmId}/page/`}
                    onPageCurrentChange={props.setCurrnetPageRecTC}
                    portionSize={10}
                />
            </div>
        </>
    )
}

export default Recommendation