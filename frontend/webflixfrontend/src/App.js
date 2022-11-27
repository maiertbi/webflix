import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import Favourites from "./components/Favourites";
import RemoveFavourites from "./components/RemoveFavourites";
import NavbarComp from "./components/NavbarComp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMovies from "./components/AddMovies";
import LogIn from "./components/LogIn";
import SearchBox from "./components/SearchBox";
import axios from "./api/axios";

const App = () => {

  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/home" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
