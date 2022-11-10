import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Proteced = ({children}) => {
  const { user } = useContext(AuthContext)
  console.log(user);

  if(!user){
    return <Navigate to='/' />;
  }

  return children;
}

export default Proteced;