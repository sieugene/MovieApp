import React from 'react';


const Genres = (props) => {
    let arrayOfGenreId = props.genre_ids;
    let arrayOfListGenres = props.genresList;
    let resultArray = []
    for (var i = 0; i < arrayOfGenreId.length; i++) {
        let match = arrayOfListGenres.filter(function (item) {
            return item.id === arrayOfGenreId[i];
        });
        if (match.length > 0) {
            resultArray.push(match[0]);
        }
    }
    if (resultArray.length === 0) {
        return ''
    }
    return (
        <div>
            {resultArray.map((genres, index) => {
                return <div key={index}>{genres.name}</div>
            })}
        </div>
    )
}

export default Genres