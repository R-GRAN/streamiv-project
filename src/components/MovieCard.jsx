import { useContext } from "react";
import { MoviesContext } from "@/assets/utils/MoviesContext";

function MovieCard() {
  const { movie } = useContext(MoviesContext);
  console.log(movie);

  return (
    <main className="flex-col border-r-2 border-solid border-zinc-700 p-4">
      <div className="border-solid border-zinc-400 border-y-2 py-5 text-center">
        <h2 className="text-xl">
          {movie.title} ({movie.release_date.substring(0, 4)})
          <span className="text-zinc-400"> HD</span>
        </h2>
        <div className="my-6 items-center">
          <img className="w-3/4 m-auto"
            src={"https://image.tmdb.org/t/p/original/"+ movie.poster_path}
            alt=""
          />
        </div>
      </div>
      <h3 className="text-lg my-4">Canevas du film</h3>
      <p >{movie.overview}</p>
    </main>
  );
}

export default MovieCard;
