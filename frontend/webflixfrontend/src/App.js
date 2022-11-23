import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Favourites from './components/Favourites';
import RemoveFavourites from './components/RemoveFavourites';
import NavbarComp from './components/NavbarComp.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovies from './components/AddMovies';
import LogoutLogIn from './components/LogoutLogIn';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://localhost:3000/api/movies/`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}  
	};

  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
      <div className="App">
         <Router>
          <NavbarComp searchValue={searchValue} setSearchValue={setSearchValue}/>
          <Routes>
          <Route path='/add' element={<AddMovies />} />
          <Route path='/home' element={
             <div className='container-fluid movie-app'>
             <div className='row d-flex align-items-center mt-4 mb-4'>
               <MovieListHeading heading='Movies' />
             </div>
             <div className='row'>
               <MovieList
                 movies={movies}
                 handleFavouritesClick={addFavouriteMovie}
                 favouriteComponent={Favourites}
               />
             </div>
             <div className='row d-flex align-items-center mt-4 mb-4'>
               <MovieListHeading heading='Favourites' />
             </div>
             <div className='row'>
               <MovieList
                 movies={favourites}
                 handleFavouritesClick={removeFavouriteMovie}
                 favouriteComponent={RemoveFavourites}
               />
             </div>
           </div>
          } />
          <Route path='/logout' element={<LogoutLogIn />} />
        </Routes>
      </Router>
    </div>
	);
};

export default App;