import React from 'react';

const MovieList = (props) => {


	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={movie.imdbID}>
					<img  src={movie.Poster} alt='movie'></img>
					<h1>{movie.title}</h1>
				</div>
			))}
		</>
	);
};

export default MovieList;