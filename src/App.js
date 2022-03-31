import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Coins from './components/Coins/Coins'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  )
}

export default App
