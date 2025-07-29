import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Bg_slider from '../components/Bg_slider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'


const Home = () => {
  return (
    <div className='min-h-screen ' >
        <Header/>
        <Steps/>
        <Bg_slider/>
        <Testimonials/>
        <Upload/>
    </div>
  )
}

export default Home