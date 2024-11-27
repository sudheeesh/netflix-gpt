import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOnTheAirMovies } from "../utensils/movieslice";
import { API_Options } from "../utensils/userfiles";


const useOnTheAirMovies = () => {
    const dispatch = useDispatch();

    const OnTheAirmovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air',API_Options)
      const json = await data.json();
      dispatch(addOnTheAirMovies(json.results))
    }
  
    useEffect(() => {
      OnTheAirmovies();
    },[])
}

export default useOnTheAirMovies;