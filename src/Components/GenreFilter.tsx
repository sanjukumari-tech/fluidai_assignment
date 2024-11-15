import { useState } from 'react';

function GenreFilter({ onFilter }: { onFilter: (genre: string) => void }) {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    onFilter(genre);
  };

  return (
    <select value={selectedGenre} onChange={handleGenreChange}>
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
 
    </select>
  );
}

export default GenreFilter;