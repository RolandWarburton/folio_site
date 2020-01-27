import React, { useContext, useEffect } from 'react';
import {MovieContext} from './context'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  )
}

  export default MovieList;