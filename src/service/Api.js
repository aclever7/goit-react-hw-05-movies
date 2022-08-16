import axios from 'axios';

const KEY = '907d92356ea975d8c4e764d27999a432';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const getTrandingMovies = async page => {
  if (!page) page = 1;
  const res = await axios.get(`3/trending/all/day?api_key=${KEY}&page=${page}`);
  const movies = res.data;
  return movies;
};

export const getMovieById = async movie_id => {
  const res = await axios.get(
    `3/movie/${movie_id}?api_key=${KEY}&append_to_response=videos`
  );
  const movie = res.data;
  return movie;
};

export const getCastOfTheMovie = async movie_id => {
  const res = await axios.get(`3/movie/${movie_id}/credits?api_key=${KEY}`);
  const cast = res.data;
  return cast;
};

export const getReviewsOfTheMovie = async movie_id => {
  const res = await axios.get(`3/movie/${movie_id}/reviews?api_key=${KEY}`);
  const reviews = res.data;
  return reviews;
};

export const getMovieByQuery = async (query, page) => {
  const res = await axios.get(
    `3/search/movie?api_key=${KEY}&query=${query}&page=1&include_adult=false&page=${page}`
  );
  const movies = res.data;
  return movies;
};
