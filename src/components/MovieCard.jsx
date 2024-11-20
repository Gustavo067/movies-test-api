import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="relative bg-[#2E563D] p-4 rounded-lg border-2 border-[#2E563D] hover:bg-[#4A7C57] transition-all shadow-lg">
        {/* Cartaz do filme */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-lg mb-4"
        />
        {/* Título do filme */}
        <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-[#F1F1F1] bg-[#2E563D] p-2 ">
          {movie.title}
        </h2>
        {/* Descrição do filme (opcional) */}
        {/* <p className="text-gray-300 mt-2">{movie.overview}</p> */}
      </div>
    </Link>
  );
};

export default MovieCard;
