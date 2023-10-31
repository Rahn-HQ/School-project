import React from 'react'

import '../app/globals.css'

const Header = () => {
  return (
    <div className='relative'>
    
    <picture className='HeaderPic'>
       
       <img
        src="https://i.ibb.co/svZ74Kt/pexels-max-fischer-5212331.webp"
        alt="Landscape picture"
        className=' w-full object-cover max-md:h-[400px] HeaderPic  '
       />
      
      </picture>

      <div className=' absolute z-10  left-[15%] right-[15%] top-[50%]'>

      <p className=' text-white text-5xl max-lg:text-3xl lg:font-medium text-center '>THE PURSUIT OF EXCELLENCE BEGINS HERE.</p>

      <picture className=' '>
       
       <img
        src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/ee6c9231-9ad7-4a4d-98ee-6838ee26ee4a/Untitled-5-02.png?format=1500w"
        alt="Landscape picture"
        className=' w-[100px] h-[100px]  mx-auto max-lg:hidden  transition ease-in-out delay-150  hover:translate-y-1 hover:scale-110  duration-300  hover:drop-shadow-2xl  '
       />
      
      </picture>

      </div>
    
    </div>
  )
}

export default Header