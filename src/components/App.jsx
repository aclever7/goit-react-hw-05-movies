import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() =>
  import('pages').then(module => ({ default: module.Home }))
);

const MoviePage = lazy(() =>
  import('pages').then(module => ({ default: module.MoviePage }))
);

const SearchMovie = lazy(() =>
  import('pages').then(module => ({ default: module.SearchMovie }))
);

const MovieCast = lazy(() =>
  import('./MovieCast/MovieCast').then(module => ({
    default: module.MovieCast,
  }))
);

const MovieReviews = lazy(() =>
  import('./MovieReviews/MovieReviews').then(module => ({
    default: module.MovieReviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies/*" element={<SearchMovie />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
