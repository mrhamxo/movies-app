import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../contextapi/context';

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <section className='movie-page'>
      <div className='grid grid-col-4'>
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          return <NavLink to={`movie/${imdbID}`}>
            <div className='card'>
              <div className='card-info'>
                <h2>{Title}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
        })}
      </div>
    </section>
  )
}

export default Movies