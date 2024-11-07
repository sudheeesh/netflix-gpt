import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utensils/firebase'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utensils/userSlice'

const Body = () => {


    const dispatch = useDispatch()

    const approuter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    ])


    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email,displayName,photoURL} = auth.currentUser;
          dispatch(adduser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}))
          // ...
        } else {
          dispatch(removeuser())
        }
      });
    }, [])

  return (
    <div>
    <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body