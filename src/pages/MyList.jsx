import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../context/MovieContext";

export default function MyList() {
  const movieData = useContext(MovieContext);

  useEffect(() => {
    // Create a variable to store the cleanup function
    let isMounted = true;

    movieData.myList.forEach((movie) => {
      const recommendationsPromise = movieData.searchMovies(movie.title);
      recommendationsPromise
        .then((data) => {
          // Check if the component is still mounted before updating the state
          if (isMounted) {
            const updatedMovies = data.Results.map((result) => {
              return {
                genre: result.Genre,
                originalLanguage: result.Original_Language,
                overview: result.Overview,
                popularity: result.Popularity,
                posterUrl: result.Poster_Url,
                rating: result.Rating,
                releaseDate: result.Release_Date,
                title: result.Title,
                voteAverage: result.Vote_Average,
                voteCount: result.Vote_Count,
              };
            });

            movieData.setrecMovies((prevRecMovies) =>
              prevRecMovies.concat(updatedMovies)
            );

            console.log(movieData.recMovies);
          }
        })
        .catch((error) => {
          console.log("An error occurred:", error);
        });
    });

    // Cleanup function to cancel ongoing API requests when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [movieData.myList]); // Empty dependency array to trigger the effect only once

  return (
    <>
      <div
        className="MoviesContainer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Added To Watched List</h1>
        </div>
        <div className="movies">
          {movieData.myList.map((movie, index) => {
            return (
              <div className="movieDetails" key={index}>
                <MovieCard movie={movie} tag="Remove" />
              </div>
            );
          })}
        </div>
        <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "white" }}>
            Recommended Movies Based On Your Watched List
          </h1>
        </div>
        <div className="movies">
          {movieData.recMovies.map((movie, index) => {
            if (
              !movieData.myList.some((myMovie) => myMovie.title === movie.title) &&
              index <= 143 &&
              index === movieData.recMovies.findIndex((m) => m.title === movie.title)
            ) {
              return (
                <div className="movieDetails" key={index}>
                  <MovieCard movie={movie} tag="Rec." />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      </div>
    </>
  );
}
