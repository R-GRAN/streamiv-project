import { useContext } from "react";
import { MoviesContext } from "@/assets/utils/MoviesContext";
import { Link } from "react-router-dom";

function HomeList() {
  const { movies } = useContext(MoviesContext);

  console.log(movies[0]);

  return (
    <main className="flex-col border-r-2 border-solid border-zinc-700 p-4">
      <div className="border-solid border-zinc-400 border-y-2 py-5 text-center">
        <h2>À L&apos;AFFICHE</h2>
      </div>
      <ul>
        {movies.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} key={index}>
            <li className="border-solid border-b-2 border-zinc-700 hover:bg-zinc-600 py-3 cursor-pointer">
              {movie.title} ({movie.release_date.substring(0, 4)}){" "}
              <span className="text-zinc-400">{movie.quality || "HD"}</span>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default HomeList;
