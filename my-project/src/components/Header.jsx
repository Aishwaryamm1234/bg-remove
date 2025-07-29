import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 '>
        <div>
            {/*.....left side......*/}
            <h1 className=' font-outfit font-bold text-4xl xl:text-5xl 2xl:text-6xl text-neutral-700 leading-tight'>
            Remove the <br className='max-md:hidden'/><span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden'/>images for free.</h1>
            <p className=' font outfit my-6 text-[15px] text-gray-500'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br className='max-sm:hidden'/> Lorem Ipsum has been the industry's standard dummy text ever.</p>
            <input type="file" name="" id="upload1" hidden />
            <label className='inline-flex gap-3 py-3.5 px-3 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
            <img width={20} src={assets.upload_btn_icon} alt="img"/>
            <p className='text-white text-sm'>Upload your image</p>
            </label>
            
        </div>
        <div className='w-full max-w-md'>

            {/*.....right side......*/}
           
            <img src={assets.header_img} alt="img"/>
            
        </div>
    </div>
  )
}

export default Header