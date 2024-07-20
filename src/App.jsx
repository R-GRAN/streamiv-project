
import { useContext, useEffect } from "react";
import { MoviesContext } from "./assets/utils/MoviesContext";

function App({ children }) {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TMDB_KEY,
      },
    };

    fetch(
      import.meta.env.VITE_TMDB_URL +
        "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {children}
    </>
  );
}

export default App;
