import { useEffect } from 'react'
import { API_Options } from '../utensils/userfiles'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utensils/movieslice'

const useTrendingMovies = () => {

    const dispatch = useDispatch()

      const trendingMovies = async() => {
       
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_Options)
        const json = await data.json()
        console.log(json.results)
        dispatch(addTrendingMovies(json.results))
      }

      useEffect(() => {
        trendingMovies();
      })
}

export default useTrendingMovies