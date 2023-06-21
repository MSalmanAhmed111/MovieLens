import "../styles/BannerSlider.css";
import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function BannerSlider(props) {
  const images = [];
  for (let i = 0; i < 3; i++) {
    images[i] = props.popularMovies[i].posterUrl.toString();
  }

  const [activeImageNum, setCurrent] = useState(0);
  const length = images.length;
  
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    console.log();
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <>
      <div>
        <section className="image-slider">
          <div class="left">
            <ArrowBackIosIcon onClick={prevSlide} />
          </div>
          <div className="right">
            <ArrowForwardIosIcon onClick={nextSlide} />
          </div>
          {props.popularMovies.map((currentSlide, ind) => {
            return (
              <div
                className={
                  ind === activeImageNum
                    ? "currentSlide active"
                    : "currentSlide"
                }
                key={ind}
              >
                {ind === activeImageNum && (
                  <>
                    <img src={currentSlide.posterUrl} className="image" />
                    <div className="bannerTitle">
                      <h1>{currentSlide.title}</h1>
                      <p>{currentSlide.overview}</p>
                      <h3>Genre: </h3>
                      <span>{currentSlide.genre}</span>
                      <h3>Rating: </h3>
                      <span>{currentSlide.voteAverage}</span>
                      <br />
                      <Link to={`/MovieDetails/${currentSlide.title}`}>
                        <Button sx={{my:4}} variant="contained" >
                          See More</Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
