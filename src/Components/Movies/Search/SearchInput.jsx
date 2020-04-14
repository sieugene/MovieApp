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
                <div className="col">
                    <input onChange={handleChange} />
                </div>
                <div className="col">
                    <button>Ok</button>
                </div>
            </div>
        </form>
    )
}

export default SearchInput;