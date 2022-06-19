import React, { useState, useEffect } from 'react';
import Heading from '../components/Heading';
import RatingDetails from '../components/RatingDetails';
import ListSelector from '../components/ListSelector';
import MovieSelector from '../components/MovieSelector';
import MovieDetails from '../components/MovieDetails';

const Container = () => {

    const [allMovies, setAllMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [selectedList, setSelectedList] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    
    useEffect(() => {
        getMovies();
    }, [])

    useEffect(() => {
      setSelectedList(allMovies)
    }, [allMovies])

    const getMovies = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(movies => setAllMovies(movies))
    }

    const onListSelected = (index) => {
      if (index == 0){
        setSelectedList(allMovies)
      } else if (index == 1){
        setSelectedList(watchList)
      }
    }

    const onMovieSelected = (index) => {
        setSelectedMovie(allMovies[index])
    };

    const addToWatchList= (movie) => {
        const okToAdd = checkOkToAddToWatchList(movie)
        if (okToAdd){
            const watchListCopy = [...watchList, movie];
            setWatchList(watchListCopy);
        }
    }

    const checkOkToAddToWatchList = function (movieToCheck) {
        let okToAdd = true
        for (let i = 0; i < watchList.length; i++) {
          if (movieToCheck === watchList[i]){
            okToAdd = false;
          }
        }
        return okToAdd;
      };

    return (
        <div className="main-container">
            <Heading />
            <RatingDetails movies={selectedList}/>
            <ListSelector onListSelected={onListSelected}/>
            <br></br>
            <MovieSelector movies={selectedList} onMovieSelected={onMovieSelected}/>
            {selectedMovie ? <MovieDetails selectedMovie={selectedMovie} addToWatchList={addToWatchList}/> : null}
        </div>
    )
}

export default Container;
