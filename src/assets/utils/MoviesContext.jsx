import { createContext,useState } from "react";

export const MoviesContext=createContext();


function MoviesProvider({children}) {
    const [movies,setMovies]=useState([])
    const [genres,setGenres]=useState([])
    const [movie,setMovie]=useState({})
    
  return (

<MoviesContext.Provider value={{movies,genres,movie,setMovie,setMovies,setGenres}}>
    {children}
</MoviesContext.Provider>
  )
}

export default MoviesProvider
