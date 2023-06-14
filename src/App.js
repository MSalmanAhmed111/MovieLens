import "./styles/App.css";
import MovieStates from "./context/MovieSates";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
export default function App() {
  return (
    <>
      <MovieStates>
        <div className="background">
          <div className="layer">
            <Router>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Movies" element={<Movies />} />
                <Route exact path="/My-List" element={<MyList />} />
                <Route
                  exact
                  path="/MovieDetails/:movieTitle"
                  element={<MovieDetails />}
                />
              </Routes>
            </Router>
          </div>
        </div>
      </MovieStates>
    </>
  );
}
