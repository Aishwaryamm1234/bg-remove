import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center lg:px-40 py-3 px-3 '>
        <div className='flex items-center justify-center gap-5'>
        <img width={150} src={assets.logo} alt=""/>
        <p className=' flex-l border-l border-gray-400 pl-4 text-gray-500 text-sm max-sm:hidden'>All right reserved. Copyright @bg removal</p>
        </div>
       
        
        <div className='flex  gap-1'>
            
            <img width={40}  src={assets.facebook_icon} alt=""/>
            <img width={40} src={assets.twitter_icon} alt=""/>
            <img width={40} src={assets.google_plus_icon} alt=""/>
        </div>



    </div>
  )
}

export default Footer