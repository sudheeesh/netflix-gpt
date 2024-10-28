import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[signInForm, SetsignInForm] = useState(true)

  const toggleSignInForm = () => {
          SetsignInForm(!signInForm);
  }

  return (
    <div >
     <Header/>
     <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg'/>
     </div>
     <form className='w-4/12 absolute p-14 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-50'>
        <h1 className='font-bold text-3xl font-serif py-4'>{signInForm ?'Sign In' : 'SignUp'}</h1>
        <input 
         type='text' placeholder='Email' 
         className='p-4 my-2 rounded-md w-full bg-slate-700 bg-opacity-70'/>
         {!signInForm && ( 
          <input 
         type='text' placeholder='Full Name' 
         className='p-4 my-2 rounded-md w-full bg-slate-700 bg-opacity-70'/>)}
        <input 
         type='password' placeholder='Password' 
         className='p-4 my-2 rounded-md w-full bg-slate-700 bg-opacity-70'/>
        <button className='p-2 my-4 bg-red-900 rounded-lg w-full text-lg'>Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{signInForm ? 'New to Netflix?Sign Up Now': 'Already Registered?Sign In Now'}</p>
     </form>
    </div>
  )
}

export default Login