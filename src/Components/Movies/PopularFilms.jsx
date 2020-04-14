import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import SearchInput from './Search/SearchInput';
import Paginator from '../Paginator/Paginator';




const PopularFilms = (props) => {
    const [loading, toggle] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await props.setPopularMoviesTC(props.currentPage);
            await props.setGenresTC();
            toggle(false);
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
                genresList={props.genreList.genres}
                genre_ids={f.genre_ids}
            />
        </div>
    })
    if (loading) {
        return <div>loading...</div>
    }
    return (
        <>
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
            <Paginator pageSize={props.popularMovies.total_pages}
                currentPage={props.currentPage}
                onPageCurrentChange={props.setCurrnetPageTC}
                portionSize={10}
            />
        </>
    )
}

export default PopularFilms