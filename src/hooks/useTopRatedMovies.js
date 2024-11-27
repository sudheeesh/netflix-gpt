import  { useEffect } from 'react'
import { API_Options } from '../utensils/userfiles'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utensils/movieslice'

const useTopRatedMovies = () => {

  const dispatch = useDispatch()
  
  const TopRatedmovies = async () => {
          const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_Options)
          const json = await data.json()
          dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    TopRatedmovies();
  },[])

}

export default useTopRatedMovies;