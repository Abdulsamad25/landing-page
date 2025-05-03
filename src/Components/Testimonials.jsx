import React from 'react'
import grayThumbnail from '../assets/image/Gray-Thumbnail.jpg'
import greenThumbnail from '../assets/image/Green-Thumbnail.jpg'
import mintThumbnail from '../assets/image/Mint-Thumbnail.jpg'
import pinkThumbnail from '../assets/image/Pink-Thumbnail.jpg'

const Testimonials = () => {
  return (
    <div className='py-10'>
      <h1 className='font-bold text-gray-700 text-3xl text-center'>Testimonials</h1>
      <div className='flex md:flex-row flex-col justify-center items-center gap-4 mt-8'>
        <div className='p-4 rounded-lg w-full h-full'>
          <img src={grayThumbnail} alt="Gray Silicone Folding Bottle" className='rounded-lg w-full object-cover' />
        </div>
        <div className='p-4 rounded-lg w-full h-full'>
          <img src={greenThumbnail} alt="Green Silicone Folding Bottle" className='rounded-lg w-full object-cover' />
        </div>
        <div className='p-4 rounded-lg w-full h-full'>
          <img src={mintThumbnail} alt="Mint Silicone Folding Bottle" className='rounded-lg w-full object-cover' />
        </div>
        <div className='p-4 rounded-lg w-full h-full'>
          <img src={pinkThumbnail} alt="Pink Silicone Folding Bottle" className='rounded-lg w-full object-cover' />
        </div>
     </div>     
    </div>
  )
}

export default Testimonials
