import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utensils/movieslice";
import { API_Options } from "../utensils/userfiles";


const usePopularMovies = () => {
    const dispatch = useDispatch();

    const Popularmovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular',API_Options)
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
    }
  
    useEffect(() => {
      Popularmovies();
    },[])
}

export default usePopularMovies;