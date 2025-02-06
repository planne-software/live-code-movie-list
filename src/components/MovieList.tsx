import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

import { Movie, TMDB } from "tmdb-ts";


const MovieList = () => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [term, setTerm] = React.useState<string>("Star wars");

  const tmdb = new TMDB(import.meta.env.VITE_PUBLIC_API_URL);

  const navigate = useNavigate();
    
  async function fetchMovies() {        
      const moviesList = await tmdb.search.movies({ query: term, page: currentPage });    

      setTotalPages(moviesList.total_pages)

      setMovies(moviesList.results)
  }


    useEffect(() => {
      fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

  return (
    <div>
      <div>
      <input type="text" value={term} onChange={(e) => {
        setTerm(e.target.value)
      }} />
      <button onClick={() => fetchMovies() } type="button">Buscar</button>
      </div>
      <h2>
        {`Voce esta na página ${currentPage} de ${totalPages}`}
      </h2>
      <button onClick={() => {
        if (currentPage <= totalPages) {
          setCurrentPage(currentPage + 1)
          return
        }
        window.alert('Você já está na última página')
      }} type="button">Next Page</button>
      {
        movies.map((movie) => (
          <div key={movie.id}>   
          <button type="button" onClick={
            () => navigate(`/movies/${movie.id}`)
          }>
            <h2>{movie.title}</h2>
          </button>         
            <p>{movie.overview}</p>
          </div>
        ))
      }
    </div>
  )
}

export default MovieList