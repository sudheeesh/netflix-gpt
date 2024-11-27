import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAiringMovies } from "../utensils/movieslice";
import { API_Options } from "../utensils/userfiles";


const useAiringMovies = () => {
    const dispatch = useDispatch();

    const AiringMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/tv/airing_today',API_Options)
      const json = await data.json();
      dispatch(addAiringMovies(json.results))
    }
  
    useEffect(() => {
      AiringMovies();
    },[])
}

export default useAiringMovies;