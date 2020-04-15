import React, { useState } from 'react';


const SearchInput = (props) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        if (e.target.value === '') {
            return props.setPopularMoviesTC(1)
        }
        setValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        props.searchTC(value);
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col s10">
                    <input onChange={handleChange} />
                </div>
                <div className="col s2">
                    <button className='waves-effect waves-light btn-small'>Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchInput;