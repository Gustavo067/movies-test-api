const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_URL;

export const fetchMovies = async () => {
  const response = await fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${API_BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  return data;
};
