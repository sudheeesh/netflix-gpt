import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-serif font-bold text-5xl'>{title}</h1>
        <h1 className='mt-3 font-serif w-1/4 '>{overview}</h1>
        <div className='pt-8 '>
            <button className='bg-white text-black px-8  py-3 rounded-md font-semibold hover:bg-slate-200'>▶️ Play</button>
            <button className='ml-5 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-md font-semibold bg-opacity-45'>⏺️ More Info</button>
        </div>
    </div>  
  )
}

export default Videotitle