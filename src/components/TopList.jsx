import { useContext,useEffect } from "react";
import { MoviesContext } from "@/assets/utils/MoviesContext";
import { Link } from "react-router-dom";

function TopList() {
  
  const {movies,setGenres,genres}=useContext(MoviesContext)


  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
import.meta.env.VITE_TMDB_KEY,
      },
    };
fetch(import.meta.env.VITE_TMDB_URL+'/genre/movie/list?language=fr', options)
      .then((response) => response.json())
      .then((response) => {
         setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  }, []);  

  console.log(genres);


function getGenrebyIdGenres(movie){
   const foundGenre=genres.find((genre)=>genre.id === movie.genre_ids[0]);
   return foundGenre.name  
}

  const shallowMovies = [...movies].sort((a,b)=>b.vote_average-a.vote_average);


  return (
    <aside className=" p-4">
      <h2 className="text-center py-3 bg-zinc-700">TOP</h2>
      <ul className="my-2">
        {shallowMovies
          .map((movie, index) => (
            <Link key={index} to={"/movie/"+movie.id}>
            
            <li
              className="py-5 border-solid border-b-2 border-zinc-700 hover:bg-zinc-600 hover:cursor-pointer"
              
            >
              <div className="text-zinc-400">
                {index + 1}. {getGenrebyIdGenres(movie)}
              </div>
              {movie.title} ({movie.release_date.substring(0,4)})
              <div>{index === 0 && <span>🔥</span>}</div>
            </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
}

export default TopList;
