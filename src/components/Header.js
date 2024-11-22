import React from 'react'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utensils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utensils/userSlice'
import { App_Logo, User_Icon } from '../utensils/userfiles';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (

     
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email,displayName,photoURL} = auth.currentUser;
          dispatch(adduser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}))
          navigate("/browse")
        } else {
          dispatch(removeuser())
          navigate("/")
        }
      });
    }, []),

    <div className='flex absolute px-8 py-2 bg-gradient-to-b from-black w-full z-40 justify-between' >
     <img className='w-44' src={App_Logo} alt='logo'/>
     { user &&
      <div className='flex p-2'>
        <img className='w-12 h-12'
        src={User_Icon}
         />
    
      <button onClick={handleSignout} className='text-xl text-stone-900 font-serif font-bold'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header