import React from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../context/MovieContext";
import { useContext, useState } from "react";

export default function MyList() {
  // const [recMovies, setrecMovies] = useState([])
  let recMovies = [];
  const movieData = useContext(MovieContext);
  console.log(movieData.allMovies[3].title);
  console.log(movieData.myList);
  movieData.searchMovies(movieData.allMovies[3].title);
  return (
    <>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Added To Watched List</h1>
        </div>
        <div className="movies">
          {movieData.myList.map((movie, index) => {
            console.log(movieData.myList);
            const recommandationsPromise = movieData.searchMovies(
              movie.title
            );

            recommandationsPromise
            .then((data) => {
              console.log("data: ", data.Results);
              recMovies = recMovies.concat(data.Results);
              console.log("recMovies: ", recMovies);
            })
              .catch((error) => {
                console.error("Error occurred: ", error);
              })
              .finally(() => {
                console.log("recommandations resolved");
                // Perform any desired actions after the promise resolves
              });

            console.log("recommandations: ", recommandationsPromise);

            return (
              <div className="movieDetails">
                <MovieCard key={index} movie={movie} tag="Remove" />
              </div>
            );
          })}
          
          <div className="recommandedMovies">
          {recMovies.map((movie, index) => {
            return (
              <div className="movieDetails">
                <MovieCard key={index} movie={movie} tag="Remove" />
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}
