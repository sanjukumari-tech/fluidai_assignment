import{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from '../src/Components/Search';
import MovieList from '../src/Components/MovieList';
import MovieDetail from '../src/Components/MovieDetail';

import "./App.css";



function App() {
  const [movies, setMovies] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7bbd965a0fbb37a8522c49ea267991ff&query=${query}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <Router>
      <div className="app-container">
      
        <Routes>
          <Route path="/" element={
            <>
              <Search onSearch={handleSearch} />
          
              <MovieList movies={movies} />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;


