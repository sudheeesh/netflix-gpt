import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title, movies}) => {
  return (
    <div className='p-3'>
      <h1 className='text-2xl font-serif font-semibold text-white py-6'>{title}</h1>
        <div className='flex  overflow-y-scroll no-scrollbar'>
            <div className='flex gap-2'>
                {movies?.map((movies) => (<Moviecard key={movies.id} posterPath={movies.poster_path}/>))}
            </div>
        </div>
    </div>
  )
}

export default Movielist