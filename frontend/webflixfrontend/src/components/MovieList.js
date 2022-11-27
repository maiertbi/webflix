import React, { useState, useEffect } from 'react';
import image from './pic1.jpg';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import Favourites from '../components/Favourites';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import RemoveFavourites from './RemoveFavourites.js';


const MovieList = (props) => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		getMovies();
	});


	const getMovies = async function () { 
		const response = await axios.get("http://localhost:3000/api/movies/");
		setMovies(response?.data);
	};


	// everything just for favourites from that point on
	const saveFavourites = (items) => {
		localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveFavourites(newFavouriteList);
	};
	
	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
	
		setFavourites(newFavouriteList);
		saveFavourites(newFavouriteList);
	};
	
	// get the list of favorites from localStorage
	useEffect(() => {
		const movieFavourites = JSON.parse(
		  localStorage.getItem("react-movie-app-favourites")
		);
	
		if (movieFavourites) {
		  setFavourites(movieFavourites);
		}
	  }, []);
	
	return (
		<>
			<div className="container movie-app">
				<div className="row d-flex align-items-center mt-4 mb-4">
				<MovieListHeading heading="Movies" />
				<SearchBox
					// searchValue={searchValue}
					// setSearchValue={setSearchValue}
				/> 
				</div>
				<div className="row">
					{movies.map((movie, id) => (
						<div key={id} className='image-container'>
							<img src={image} alt='movie'></img> 
					
							<div className="heart" key="{item}" onClick={() => addFavouriteMovie(movie)}>
								<Favourites/>
							</div>
							<div className="moviename">
								<Link to={"/movies"}>
									<button>Moviename</button>
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="row d-flex align-items-center mt-4 mb-4">
				<MovieListHeading heading="Favourites" />
				</div>

				<div className="row">
					{favourites.map((movie, id) => (
						<div key={id} className='image-container'>
							<img src={image} alt='movie'></img> 
					
							<div className="heart" key="{item}" onClick={() => removeFavouriteMovie(movie)}>
								<RemoveFavourites/>
							</div>
							<div className="moviename">
								<Link to={"/movies"}>
									<button>Moviename</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MovieList;