import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondcontainer = () => {
   
  const movies = useSelector((store) => store.movies)



  return (
    // movies.nowPlayingMovies && (
    <div className='bg-gray-950'>
    <div className=' relative z-20'>
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Popular"} movies={movies.PopularMovies} />
      <Movielist title={"Top Rated"} movies={movies.TopRatedMovies} />
      <Movielist title={"Upcoming"} movies={movies.UpcomingMovies} />
      <Movielist title={"Airing Today"} movies={movies.AiringMovies} />
      <Movielist title={"On The Air"} movies={movies.OnTheAirMovies} />
    </div>
    </div>
  )
}

export default Secondcontainer