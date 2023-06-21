import React, { useState, useEffect } from "react";
import MovieContext from './MovieContext';
import movieData from "../data/movieData";


const MovieStates = (props) => {
  // console.log(movieData)
  // const movies = JSON.parse(movieData)
  const [myList, setmyList] = useState([]);
  const [allMovies, setallMovies] = useState(movieData);
  const [recMovies, setrecMovies] = useState([])
  console.log(allMovies)
  const searchMovies = async (title) => {
    try {
      const response = await fetch('http://localhost:5000/getMovieBySearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title }),
      });
      const data = await response.json();
      console.log(data); // Process the response data as needed
      return data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MovieContext.Provider value={{ allMovies, setallMovies, myList, setmyList, recMovies,  setrecMovies, searchMovies}}>
      {props.children}
    </MovieContext.Provider>
  );

};

export default MovieStates;
