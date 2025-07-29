import React from 'react'
import {Routes,Route} from'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
  <div className='man-h-screen bg-[#F7FBFF]'>
  <Navbar></Navbar>
 
  <Routes>
    <Route path='/' element={<Home/>} />
    
    <Route path='/buy' element={<BuyCredit/>} />
    <Route path='/result' element={<Result/>} />
  </Routes>
  <Footer/>

  </div>

  )
}

export default App