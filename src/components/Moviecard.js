import React from 'react'
import { IMG_options } from '../utensils/userfiles'

const Moviecard = ({posterPath}) => {
  return (
    <div className='w-48 pr-6'>
        <img alt='movie card' src={IMG_options + posterPath}/>
    </div>
  )
}

export default Moviecard