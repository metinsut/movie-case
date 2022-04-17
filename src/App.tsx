import { Route, Routes } from 'react-router-dom';
import Header from 'components/header/Header';
import MovieDetail from 'components/movie-detail/MovieDetail';
import MovieList from 'components/movie-list/MovieList';

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<MovieList />} />
      </Routes>
    </main>
  );
}

export default App;
