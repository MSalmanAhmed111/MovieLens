import React, { useContext } from "react";
import { useParams } from "react-router";

import MovieContext from "../context/MovieContext";
import BannerSlider from "../components/BannerSlider";
import { Box, Stack, Typography } from "@mui/material";

export const MovieDetails = () => {
  const { movieTitle } = useParams();
  const { allMovies } = useContext(MovieContext);
  let movieData = {};

  for (let index = 0; index < allMovies.length; index++) {
    const movie = allMovies[index];
    if (movie.title === movieTitle) {
      movieData = movie;
      break;
    }
  }
  const {
    movieId,
    releaseDate,
    title,
    overview,
    voteAverage,
    originalLanguage,
    genre,
    posterUrl,
  } = movieData;

  return (
    <>
      <Box width="70%" sx={{
        margin:"auto", my:5
      }}>
        <Stack spacing={4} direction="row" alignItems="center">
          <img src={posterUrl} width="40%" height="100%" alt="" />
          <Box>
              <Stack direction="row" sx={{m:3}}>
                <Typography variant="body1" color="info.light">
                  Movie ID:
                </Typography>
                <Typography variant="body1" color="white" sx={{mx:2}}>
                  {movieId}
                </Typography>
              </Stack>
              <Stack direction="column" sx={{m:3}}>
                <Typography variant="h4" color="info.light">
                  {title}
                </Typography>
              </Stack>
              <Stack direction="column" sx={{m:3, alignItems:"baseline"} }>
                <Typography variant="h6" color="info.light" >
                Synopsis:
                </Typography>
                <Typography variant="body1" color="white" sx={{mx:4}}>
                  {overview}
                </Typography>
              </Stack>
              <Stack direction="column" sx={{m:3, alignItems:"baseline"} }>
                <Typography variant="h6" color="info.light" >
                Genre:
                </Typography>
                <Typography variant="body1" color="white" sx={{mx:4}}>
                  {genre}
                </Typography>
              </Stack>
              <Stack direction="column" sx={{m:3, alignItems:"baseline"} }>
                <Typography variant="h6" color="info.light" >
                Ratings:
                </Typography>
                <Typography variant="body1" color="white" sx={{mx:4}}>
                  {voteAverage}
                </Typography>
              </Stack>
              <Stack direction="column"  sx={{m:3, alignItems:"baseline"} }>
                <Typography variant="h6" color="info.light" >
                Realase Date:
                </Typography>
                <Typography variant="body1" color="white" sx={{mx:4}}>
                  {releaseDate}
                </Typography>
              </Stack>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography sx={{m:5}} variant="h4" color="lightgray">
            Comments: -
        </Typography>
      </Box>
    </>
  );
};
