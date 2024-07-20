import TopList from "@/components/TopList";
import MovieCard from "@/components/MovieCard";
import HomeList from "@/components/HomeList";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "@/assets/utils/MoviesContext";

function MoviePage() {
  const { setMovie, movies } = useContext(MoviesContext);
  const { id } = useParams();

  const film = movies.find((movie) => movie.id == id);
  setMovie(film);

  return (
    <div className="flex flex-col mt-3 sm:flex-row">
      <div className="sm:w-2/3">
        <MovieCard />
        <HomeList />
      </div>
      <TopList />
    </div>
  );
}

export default MoviePage;
