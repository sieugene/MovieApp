import React, { useEffect } from 'react';
import Movie from './Movie';
import SearchInput from './Search/SearchInput';




const PopularFilms = (props) => {
    useEffect(() => {
        async function fetchData() {
            const response = await props.setPopularMoviesTC(1);
        }
        fetchData();
    }, [])

    const getMovies = props.popularMovies.results.map((f) => {
        return <div className="col" key={f.id}>
            <Movie title={f.title}
                release_date={f.release_date}
                vote_average={f.vote_average}
                backdrop_path={f.backdrop_path}
                id={f.id}
            />
        </div>
    })
    return (
        <div className='mt20'>
            <div className="row">
                <div className="col">
                    <h5 className='left-align'>Popular Films</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SearchInput searchTC={props.searchTC} setPopularMoviesTC={props.setPopularMoviesTC} />
                </div>
            </div>
            <div className="row">
                {getMovies}
            </div>
        </div>
    )
}

export default PopularFilms