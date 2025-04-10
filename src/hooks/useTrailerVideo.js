import { useEffect } from "react"
import { API_Options } from "../utensils/userfiles"
import { addTrailerVideo } from "../utensils/movieslice"
import { useDispatch } from "react-redux"


const useTrailerVideo = (movieId) => {
    
    const dispatch = useDispatch()
   const getMovieVideos = async() => {
        
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',API_Options)

    const json = await data.json();
    console.log(json.results)
   

   const filterData = json.results.filter((video) => video.type === 'Trailer');
   const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))

   }

   useEffect(() => {
    getMovieVideos();
   }, [])

}

export default useTrailerVideo