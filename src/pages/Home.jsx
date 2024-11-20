import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Header */}
      <header className="p-6 bg-[#346541] text-white text-center">
        <h1 className="text-4xl font-bold">Filmes</h1>
      </header>

      {/* Movie grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
