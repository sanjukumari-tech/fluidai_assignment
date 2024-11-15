import 
 { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css"

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7bbd965a0fbb37a8522c49ea267991ff`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
      <p>{movie.overview}</p>
      <p>Director: XYZ company</p> 
      <p>Cast: Ammy jackson </p> 
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>IMDb Rating: {movie.vote_average}</p>
      </div>

      <button className="home-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default MovieDetail;