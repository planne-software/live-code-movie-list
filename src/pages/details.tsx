import { useParams } from 'react-router'
import MovieDetail from '../components/MovieDetail'

const MovieDetails = () => {
    const param = useParams()

  return (
    <div>
        <MovieDetail id={Number(param.id)} />
    </div>
  )
}

export default MovieDetails