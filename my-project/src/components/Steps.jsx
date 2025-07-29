import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='m-4 lg:m-40 py-20 xl:py-30' >
        <h1 className='  py-2 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold leading-tight bg-gradient-to-r from-gray-900 to-[#b7b6b6] bg-clip-text text-transparent sm:mb-20 '>Steps to remove background<br className='max-sm:hidden'/> image in second
       
        </h1>
        <div className='flex m-4 sm:m-8  justify-center items-center flex-wrap gap-8 mt-16 xl:mt-24'>
            <div className='flex  items-start gap-4  bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className="max-w-9" src={assets.upload_icon} alt=""/>
                <div>
                    <p className='text-xl  font-medium '>Upload image</p>
                    <p className='text-neutral-500 text-sm mt-1'>This is a demo text, will replace it later.<br className='max-sm:hidden'/> This is a demo..</p>
                </div>
            </div>
            <div className='flex  items-start gap-4  bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className="max-w-9" src={assets.remove_bg_icon} alt=""/>
                <div>
                    <p className='text-xl font-medium '>Remove background</p>
                    <p className='text-neutral-500 text-sm mt-1'>This is a demo text, will replace it later.<br className='max-sm:hidden'/> This is a demo..</p>
                </div>
            </div>
            <div className='flex  items-start gap-4  bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className="max-w-9" src={assets.download_icon} alt=""/>
                <div>
                    <p className='text-xl font-medium '>Download image</p>
                    <p className='text-neutral-500 text-sm mt-1'>This is a demo text, will replace it later.<br className='max-sm:hidden'/> This is a demo..</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps