import "../styles/Movies.css";

import React, { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import BannerSlider from "../components/BannerSlider";
import MovieContext from "../context/MovieContext";
import Pagination from "../components/Pagination";

export default function Movies() {
  const { allMovies } = useContext(MovieContext);

  const [moviesPerPage, setmoviesPerPage] = useState(14);
  const [currentPage, setcurrentPage] = useState(1);
  const indEnd = moviesPerPage * currentPage;
  const indStart = indEnd - moviesPerPage;

  const [categories, setcategories] = useState({
    popularMovies: {
      movies: allMovies.filter((movies) => movies.popularity > 1000),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    topRatedMovies: {
      movies: allMovies.filter((movies) => movies.voteAverage >= 8),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    actionAdventureMovies: {
      movies: allMovies.filter(
        (movies) =>
          movies.genre.includes("Action") || movies.genre.includes("Adventure")
      ),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    crimeThrillerMovies: {
      movies: allMovies.filter(
        (movies) =>
          movies.genre.includes("Crime") ||
          movies.genre.includes("Thriller") ||
          movies.genre.includes("Mystery")
      ),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    scienceFictionMovies: {
      movies: allMovies.filter((movies) =>
        movies.genre.includes("Science Fiction")
      ),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    comedyFamilyMovies: {
      movies: allMovies.filter(
        (movies) =>
          movies.genre.includes("Comedy") || movies.genre.includes("Family")
      ),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    animationMovies: {
      movies: allMovies.filter((movies) => movies.genre.includes("Animation")),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
    fantasyMovies: {
      movies: allMovies.filter((movies) =>
        movies.genre.includes("fantasyMovies")
      ),
      startInd: 0,
      endInd: 14,
      moviePerPage: 14,
      currentPage: 1,
    },
  });

  return (
    <>
      <div className="banner">
        <BannerSlider popularMovies={categories.popularMovies.movies} />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Top Rated Movies</h1>
        </div>
        <div className="movies">
          {categories.topRatedMovies.movies
            .slice(
              categories.topRatedMovies.startInd,
              categories.topRatedMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="topRatedMovies"
          moviesPerPage={categories.topRatedMovies.moviePerPage}
          movieArray={categories.topRatedMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Action/Adventure</h1>
        </div>
        <div className="movies">
        {categories.actionAdventureMovies.movies
            .slice(
              categories.actionAdventureMovies.startInd,
              categories.actionAdventureMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="actionAdventureMovies"
          moviesPerPage={categories.actionAdventureMovies.moviePerPage}
          movieArray={categories.actionAdventureMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Comedy/Family</h1>
        </div>
        <div className="movies">
        {categories.comedyFamilyMovies.movies
            .slice(
              categories.comedyFamilyMovies.startInd,
              categories.comedyFamilyMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="comedyFamilyMovies"
          moviesPerPage={categories.comedyFamilyMovies.moviePerPage}
          movieArray={categories.comedyFamilyMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Crime/Thriller/Mystery</h1>
        </div>
        <div className="movies">
        {categories.crimeThrillerMovies.movies
            .slice(
              categories.crimeThrillerMovies.startInd,
              categories.crimeThrillerMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="crimeThrillerMovies"
          moviesPerPage={categories.crimeThrillerMovies.moviePerPage}
          movieArray={categories.crimeThrillerMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Fantasy</h1>
        </div>
        <div className="movies">
        {categories.fantasyMovies.movies
            .slice(
              categories.fantasyMovies.startInd,
              categories.fantasyMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="fantasyMovies"
          moviesPerPage={categories.fantasyMovies.moviePerPage}
          movieArray={categories.fantasyMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Science Fiction</h1>
        </div>
        <div className="movies">
        {categories.scienceFictionMovies.movies
            .slice(
              categories.scienceFictionMovies.startInd,
              categories.scienceFictionMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="scienceFictionMovies"
          moviesPerPage={categories.scienceFictionMovies.moviePerPage}
          movieArray={categories.scienceFictionMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
      <div className="MoviesContainer">
        <div className="heading">
          <h1 style={{ color: "whitesmoke" }}>Animation</h1>
        </div>
        <div className="movies">
        {categories.animationMovies.movies
            .slice(
              categories.animationMovies.startInd,
              categories.animationMovies.endInd
            )
            .map((movie, index) => {
              return (
                <div className="movieDetails">
                  <MovieCard key={index} movie={movie} tag={"Add +"} />
                </div>
              );
            })}
        </div>
        <Pagination
          categoryName="animationMovies"
          moviesPerPage={categories.animationMovies.moviePerPage}
          movieArray={categories.animationMovies.movies}
          setcategories={setcategories}
          categories={categories}
        />
      </div>
    </>
  );
}
