import React from 'react'
import {assets} from '../assets/assets'

const Upload = () => {
  return (
    <div>
        <h1 className='mb-12 sm:mb-20 my-2 py-5 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold leading-tight bg-gradient-to-r
         from-gray-900 to-gray-300 bg-clip-text text-transparent'>
        See the magic. Try now
        </h1>
        <div className='text-center mb-24'>
        <input type="file" name="" id="upload2" hidden />
        <label className='inline-flex gap-3 py-3.5 px-3 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload2">
        <img width={20} src={assets.upload_btn_icon} alt="img"/>
        <p className='text-white text-sm'>Upload your image</p>
        </label>
        </div>
    </div>
  )
}

export default Upload