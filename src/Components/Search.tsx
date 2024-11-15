import 
 { useState } from 'react';
import GenreFilter from './GenreFilter'; // Adjust the import path as necessary

function Search({ onSearch }: { onSearch: (query: string, genre: string) => void }) {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, genre);
  };

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <GenreFilter onFilter={setGenre} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;