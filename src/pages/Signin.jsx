import React from 'react'
import gg from '../assets/icon_gg.png'
import fb from '../assets/fb.png'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Signin = () => {
  const {LoginGoogle, LoginFacebook, user} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await LoginGoogle()
      
    } catch (error) {}
  }

  const handleFbSignIn = async () => {
    try {
      await LoginFacebook()
    } catch (error) {}
  }

  useEffect(() => {
    if(user !== null){
      navigate('/account')
    }
  }, [user])

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Sign in</h1>
      <div className="max-w-[240px] m-auto py-4">
        <div>
          <button className='btn' onClick={handleGoogleSignIn}>
            <img src={gg} alt="" className='img' />
            <span>Login with Google</span>
          </button>
          <button className='btn' onClick={handleFbSignIn}>
            <img src={fb} alt="" className='img_fb' />
            <span>Login with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signin
