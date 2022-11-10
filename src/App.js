import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Proteced from './components/Proteced'
import './index.css'
import Account from './pages/Account'
import Home from './pages/Home'
import Signin from './pages/Signin'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/account"
          element={
            <Proteced>
              <Account />
            </Proteced>
          }
        />
      </Routes>
    </>
  )
}

export default App
