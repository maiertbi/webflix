import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import NavbarComp from "./components/NavbarComp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMovies from "./components/AddMovies";
import LogIn from "./components/LogIn";
import axios from "./api/axios";
import MovieComponent from "../src/components/MovieComponent";

const App = () => {

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/home" element={<MovieList />} />
          <Route path="/movies" element={<MovieComponent />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
