import React from 'react';

const StarIcon = (props) => {
    if (props.count >= 8) {
        return <i className="material-icons">star</i>
    } else if (props.count >= 3) {
        return <i className="material-icons">star_half</i>
    } else {
        return <i className="material-icons">star_border</i>
    }
}

export default StarIcon;