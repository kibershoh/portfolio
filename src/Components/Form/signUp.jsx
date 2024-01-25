import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../firebase2'
import Home from '../Home'

const SignUp = () => {
    const [value,setVAlue]= useState("")
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setVAlue(data.user.email)
            localStorage.setItem("email",data.user.email)
       
       useEffect(()=>{
        setVAlue(localStorage.getItem('email'))
       })
        })
    }
  return (
    <div>
        {value? <Home/>:
      <button>Sign In with Google</button>
  }
    </div>
  )
}

export default SignUp
