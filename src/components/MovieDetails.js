import React from 'react';

const MovieDetails = ({selectedMovie, addToWatchList}) => {

   const handleClick = () => {
     addToWatchList(selectedMovie);
   }

    return (
        <div className="movies">
            <h1>{selectedMovie.title}</h1>
            <img src = {selectedMovie.image} alt= {selectedMovie.title} height = '300'></img>
            <table>
                <tr>
                    <th>Japanese Title</th>
                    <td>{selectedMovie.original_title}</td>
                </tr>
                <tr>
                    <th>Director</th>
                    <td>{selectedMovie.director}</td>
                </tr>
                <tr>
                    <th>Released</th>
                    <td>{selectedMovie.release_date}</td>
                </tr>
                <tr>
                    <th>RT Rating</th>
                    <td>{selectedMovie.rt_score}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{selectedMovie.description}</td>
                </tr>
            </table>
            <button type="button" onClick={handleClick}>Add To Watch List</button>
        </div>
    )
}

export default MovieDetails;