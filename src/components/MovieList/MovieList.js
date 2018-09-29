import React from 'react';
// import { connect } from 'react-redux';

import './MovieList.css';
import MovieDetail from './MovieDetail/MovieDetail';

const movieList = (props) => {
    let movies = props.movies.map((movie, i) => {
        return (
            <MovieDetail
                key={movie.id}
                img={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                rating={movie.vote_average}
                openModal={() => props.openModal(i)} 
            />
            
        )
    })
    return (
        <div className="movie-container">
            {movies}
        </div>
    )
}

export default movieList;