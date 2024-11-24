import React, { useEffect, useState } from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'

const Videobackground = ({movieId}) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

    useTrailerVideo(movieId);
  return (
    <div>
     <iframe 
     className='w-screen h-screen aspect-video'
     width="560" 
     height="315" 
     src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1" }
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    >
     </iframe>
    </div>
  )
}

export default Videobackground