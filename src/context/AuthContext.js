import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const LoginGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const LoginFacebook = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const logOut = () => {
    signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ LoginGoogle, LoginFacebook, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
