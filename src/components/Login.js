import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utensils/Validate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utensils/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Background_Pic, User_Icon } from '../utensils/userfiles';
import { adduser } from '../utensils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const[signInForm, SetsignInForm] = useState(true);
  const[errorMessage, SeterrorMessage] = useState(null);
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    // console.log(email)
    // console.log(password.current.value)
    // console.log(name.current.value)

    const message = checkValidData(email.current.value, password.current.value);
    SeterrorMessage(message);

    if(message) return 
     
    if(!signInForm)
     {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: User_Icon
        })
          .then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(
              adduser({
                uid : uid,
                email: email,
                displayName: displayName,
                photoURL:photoURL,
              })
            );
        }).catch((error) => {
           SeterrorMessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SeterrorMessage(errorCode + "-"+ errorMessage)
        // ..
      });
    
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SeterrorMessage(errorCode + "-" + errorMessage)
      });
    
    }

  // signup/signin
   
  }

  const toggleSignInForm = () => {
          SetsignInForm(!signInForm);
  }

  return (
    <div >
     <Header/>
     <div className='absolute'>
        <img src={Background_Pic}/>
     </div>
     <form 
         onSubmit={(e) => e.preventDefault() }
         className='w-4/12 absolute p-14 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-50'>
        <h1 className='font-bold text-3xl font-serif py-4'>{signInForm ?'Sign In' : 'SignUp'}</h1>
        <input 
         ref={email}
         type='text' placeholder='Email' 
         className='p-4 my-2 rounded-md w-full bg-slate-700 bg-opacity-70'/>
         {!signInForm && ( 
        <input 
         ref={name}
         type='text' placeholder='Full Name' 
         className='p-4 my-2 rounded-md w-full bg-slate-700 bg-opacity-70'/>)}
        <input 
         ref={password}
         type='password' placeholder='Password' autoComplete='on'
         className='p-4 my-2 rounded-md w-full bg-slate-700 bg-opacity-70'/>
         <p className='text-red-700 font-bold text-lg py-4'>{errorMessage}</p>
        <button className='p-2 my-4 bg-red-900 rounded-lg w-full text-lg'onClick={handleButtonClick}>{signInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{signInForm ? 'New to Netflix?Sign Up Now': 'Already Registered?Sign In Now'}</p>
     </form>
    </div>
  )
}

export default Login