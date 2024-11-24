import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utensils/movieslice";
import { API_Options } from "../utensils/userfiles";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingmovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_Options)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(() => {
      nowPlayingmovies();
    },[])
}

export default useNowPlayingMovies;