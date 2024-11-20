import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate(); // hook para navegação

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div className="text-center text-white">Carregando...</div>;

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Header with Back Button */}
      <div className="absolute top-0 left-0 p-4 z-10">
        <button
          onClick={() => navigate(-1)} // Navega para a página anterior
          className="bg-[#346541] hover:bg-[#2e563d] text-white py-2 px-4 rounded-md shadow-lg transition-all"
        >
          Voltar
        </button>
      </div>

      {/* Background image */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Movie details section */}
      <div className="p-8 bg-[#111111]">
        <h1 className="text-4xl font-bold text-center mb-4">{movie.title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed">{movie.overview}</p>

        {/* Additional movie details (release date, genres, etc.) */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Detalhes</h2>
          <ul className="list-none space-y-2 text-gray-400">
            <li><strong>Data de Lançamento:</strong> {movie.release_date}</li>
            <li><strong>Gêneros:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</li>
            <li><strong>Idioma:</strong> {movie.original_language}</li>
            <li><strong>Avaliação:</strong> {movie.vote_average} / 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
