import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
//posts.map((post, index) => <Post details={post} key={index}
	return (
		<>
			{props.movies.map((movie, id) => (
				<div key={id} className='image-container d-flex m-3'>
					<img src="./pictures/pic1.jpg" alt='movie'></img>
					<div key="{item}"
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;