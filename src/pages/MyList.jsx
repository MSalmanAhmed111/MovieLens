import React from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";

export default function MyList() {
  const movieData = useContext(MovieContext);
  return (
    <>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Added To Watched List</h1>
        </div>
        <div className="movies">
          {movieData.myList.map((movie, index) => {
            console.log(movieData.myList);
            return (
              <div className="movieDetails">
                <MovieCard key={index} movie={movie} tag = {"Remove"}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
