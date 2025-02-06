import React, { useEffect } from 'react'
import { MovieDetails, TMDB } from 'tmdb-ts';

const MovieDetail = ({ id }: { id: number}) => {
    const [movieDetails, setMovieDetails] = React.useState<MovieDetails | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    const tmdb = new TMDB(import.meta.env.VITE_PUBLIC_API_URL);

  async function fetchMovieById() {
    setLoading(true)
    const movie = await tmdb.movies.details(id);

    setMovieDetails(movie)
    setLoading(false)
  }


  useEffect(() => {
    fetchMovieById()
  }, [id])

  return (
    <div>
        {
            loading ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    <h2>{movieDetails?.title}</h2>
                    <p>{movieDetails?.overview}</p>
                </div>
            )
        }
    </div>
  )
}

export default MovieDetail