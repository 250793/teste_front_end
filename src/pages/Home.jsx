import { useState, useEffect } from "react";
import MovieCard from "../componentes/MovieCard";

import "./MovieGrid.css";

const filmesUrl = import.meta.env.VITE_API;
const apiChave = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topFilmes, setTopFilmes] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopFilmes(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${filmesUrl}top_rated?${apiChave}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {topFilmes.length > 0 &&
          topFilmes.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
