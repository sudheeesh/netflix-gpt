import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies} from "../utensils/movieslice";
import { API_Options } from "../utensils/userfiles";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const UpcomingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_Options)
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(() => {
      UpcomingMovies();
    },[])
}

export default useUpcomingMovies;