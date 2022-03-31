import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Coins from './components/Coins/Coins'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Contact from './components/Contact/Contact'
import UsAddress from './components/Contact/UsAddress'
import BdAddress from './components/Contact/BdAddress'

const App = () => {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}/>
          <Route path='us-address' element={<UsAddress></UsAddress>}/>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  )
}

export default App
