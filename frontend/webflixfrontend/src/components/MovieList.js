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
	const [searchKey, setSearchKey] = useState("");
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		if (searchKey !== "" && searchValue !== ""){
			getSpecificMovie();	
		} else {
			getMovies();
		}
	});

	const getMovies = async function () { 
		try {
			const response = await axios.get("http://localhost:3000/api/movies/");
			setMovies(response?.data);
		} catch (e) {
			console.error(e);
		}
	};

	const getSpecificMovie = async function () {
		try {
			const response = await axios.get("http://localhost:3000/api/movies/", {
				params: {key: searchKey, value: searchValue}
			});
			setMovies(response?.data);
		} catch (e) {
			console.error(e);
		}	
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
				<select className="selectGenre" id="searchKey" onChange={(e) => setSearchKey(e.target.value)}>
					<option value="">Select SearchKey...</option>
					<option value="title">Title</option>
					<option value="director">Director</option>
					<option value="year">Year</option>
					<option value="genre">Genre</option>
                </select>
				<div className='col col-sm-4'>
					<input
						className='form-control'
						value={searchValue}
						onChange={(event) => setSearchValue(event.target.value)}
						placeholder='Type to search...'>
					</input>
				</div>
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
									<button className="movieBtn">{movie.title}</button>
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
									<button className="movieBtn">{movie.title}</button>
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