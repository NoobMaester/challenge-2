import React from 'react'

const Album = ({title, image}) => {
    return (
        <div className = "album" >
            <h3>{title}</h3>
            <img src={image} alt="Thumbnail" />
        </div>
    );
}
export default Album;