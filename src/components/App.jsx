import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<HomePage />} />
        {/* <Route path='/movie-details' element={<MovieDetails/>}/> */}
      </Route>
    </Routes>
  );
};
