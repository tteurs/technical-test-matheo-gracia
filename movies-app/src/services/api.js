import axios from 'axios';
const api = axios.create({
  // baseURL: {import.meta.env.REACT_APP_API_URL_PROD || 'http://localhost:3001'},
  baseURL: 'http://localhost:3001/api/v1',
});

const STATS_ENDPOINTS = {
  HIGHEST_RATED_MOVIES: '/stats/highest_rated_movies',
  YEAR_WITH_MOST_MOVIES: '/stats/year_with_most_movies',
  MOVING_AVERAGE_RATINGS: '/stats/moving_average_ratings',
  TOTAL_MOVIES_BY_GENRE: '/stats/total_movies_by_genre',
  AVERAGE_RATING_BY_YEAR: '/stats/average_rating_by_year',
};

const getMovies = () => api.get('/movies');
const getMovie = (id) => api.get(`/movies/${id}`);
const addMovie = (data) => api.post('/movies', data);
const deleteMovie = (id) => api.delete(`/movies/${id}`);
const getStats = (endpoint) => api.get(endpoint);
const rateMovie = (movieId, grade) => {
  return api.post(`/ratings/${movieId}`, { grade });
};

export {
  getMovies,
  getMovie,
  getStats,
  addMovie,
  deleteMovie,
  rateMovie,
  STATS_ENDPOINTS,
};
