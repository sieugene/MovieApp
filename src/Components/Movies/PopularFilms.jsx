import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import SearchInput from './Search/SearchInput';
import Paginator from '../Paginator/Paginator';





const PopularFilms = (props) => {
    const [loading, toggle] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await props.setPopularMoviesTC(props.match.params.page);
            await props.setGenresTC();
            toggle(false);
        }
        fetchData();
    }, [])

    const getMovies = props.popularMovies.results.map((f) => {
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

                <SearchInput searchTC={props.searchTC} setPopularMoviesTC={props.setPopularMoviesTC} />

                <div className="row">
                    {getMovies}
                </div>
            </div>
            <Paginator pageSize={props.popularMovies.total_pages}
                currentPage={props.match.params.page}
                onPageCurrentChange={props.setCurrnetPageTC}
                portionSize={10}
                path={'/popular/'}
            />
        </>
    )
}

export default PopularFilms