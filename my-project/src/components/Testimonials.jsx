import React from 'react'
import {testimonialsData} from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
        <h1 className=' mb-12 sm:mb-10 my-5  py-5 text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold leading-tight bg-gradient-to-r
         from-gray-900 to-gray-300 bg-clip-text text-transparent'>
            Customer Testimonials
       
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
            {testimonialsData.map((item,index)=>(
            <div className='bg-white px-4 rounded-xl drop-shadow-md max-w-lg m-auto hover:scale-105 ' key={index}>
            <p className='text-4xl text-neutral-500'>"</p>
            <p className='font-normal text-sm text-neutral-500'>{item.text}</p>
            <div className='flex gap-3 mt-5 items-center justify-start py-3'> 
                <img className='w-9 rounded-full' src={item.image} alt=""/>
                <div>
                    <p className='font-medium text-xl font-outfit'>{item.author}</p>
                    <p className='font-medium text-sm font-outfit text-gray-600'>{item.jobTitle}</p>
                </div>
            </div>
            
            </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonials