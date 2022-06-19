import React from 'react';

const MovieSelector = ({movies, onMovieSelected}) => {

    const populateList = movies.map((movie, index) => {
        return <option value={index} key={index}>{movie.title}</option>
      })
    
    const handleChange = (event) => {
        onMovieSelected(event.target.value);
    }

    return (
        <select className="movies" id="select" onChange={handleChange}>
            <option disabled selected value=''>Select a Movie</option>
            {populateList}
        </select>
    )
}

export default MovieSelector;