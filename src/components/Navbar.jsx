import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext)

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {}
  }

  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
        <Link to="/">Firebase Google Auth & Context</Link>
      </h1>
      {user?.displayName ? (
        <button className="text" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/signin" className="text">
          Sign in
        </Link>
      )}
    </div>
  )
}

export default Navbar
