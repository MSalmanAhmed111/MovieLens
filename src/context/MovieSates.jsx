import React, { useState } from "react";
import MovieContext from './MovieContext';

import movieData from "../data/movieData";


const MovieStates = (props) => {
  const [myList, setmyList] = useState([]);
  const [allMovies, setallMovies] = useState(movieData);
  const [inWatchList, setinWatchList] = useState(false)

  return (
    <MovieContext.Provider value={{ allMovies, myList, setmyList, inWatchList,  setinWatchList}}>
      {props.children}
    </MovieContext.Provider>
  );

};

export default MovieStates;
