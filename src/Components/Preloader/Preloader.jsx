import React from 'react';


const Preloader = (props) => {
    return (
        <div className="progress">
            <div className="determinate" style={{width:'70%'}}></div>
        </div>
    )
}

export default Preloader