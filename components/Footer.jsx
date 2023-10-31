import React from 'react'

import {AiOutlineMail , AiOutlineInstagram} from 'react-icons/ai'

import {BiLogoFacebook} from 'react-icons/bi'

import Link from 'next/link'

const Footer = () => {
  return (
    <div>
    
     <div className='z-[1] p-5 relative w-full before:bg-[#142738] before:z-[-1]    before:bg-no-repeat before:bg-cover before:bg-center before:left-0 before:bottom-0 before:right-0 before:top-0	 before:absolute '>

        <div className='mx-[10%] pt-5 flex justify-between max-md:block max-lg:mx-[3%] max-md:mx-[2%]'>
         
         <div>
         <Link href="/">

          <picture>
       
           <img
           src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/7cb001d6-dd1a-49fd-aaf5-8a77f24b47b4/logo.png?format=1500w"
           alt="Landscape picture"
           className='w-[380px] h-[60px] max-md:w-full max-md:h-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '
           />
 
          </picture>
          
          </Link>

            <p className=' text-white mt-10 max-md:text-center'>230 Jones StreetSan Francisco, CA, 94102</p>

            <p className=' text-white mt-3 max-md:text-center'>415.345.0924</p>

            <div className='flex mt-5   max-md:justify-center'>

                <a href='mailto:sfca@sfcityimpact.com' target='_blank' className=' rounded-full p-1.5 bg-white text-black text-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200 '><AiOutlineMail/></a>
                <a href='http://instagram.com/sfcityacademy' target='_blank' className=' rounded-full p-1.5 bg-white text-black text-2xl ml-4 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200 '><AiOutlineInstagram/></a>
                <a href='https://www.facebook.com/SFCityAcademy/' target='_blank' className=' rounded-full p-1.5 bg-white text-black text-2xl ml-4 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200 '><BiLogoFacebook/></a>

            </div>

         </div>
         
         <div className=' mr-32 max-md:mr-0 text-left max-md:mt-10'>

            <h2 className=' text-white  '>Quick Links:</h2>

            <div className='mt-3'>

              <p className=' hover:text-[#c3e3eb] transition-colors delay-100 hover:border-[#c3e3eb] text-[#F89C23] border-b  border-[#F89C23]'><Link href="/about">ABOUT</Link></p>
              <p className=' hover:text-[#c3e3eb] transition-colors delay-100 hover:border-[#c3e3eb] text-[#F89C23] border-b border-[#F89C23] mt-5'><Link href="/activates">ACTIVATES</Link></p>
              <p className=' hover:text-[#c3e3eb] transition-colors delay-100 hover:border-[#c3e3eb] text-[#F89C23] border-b border-[#F89C23] mt-5'><Link href="/school-staff">SCHOOL-STAFF</Link></p>
              <p className=' hover:text-[#c3e3eb] transition-colors delay-100 hover:border-[#c3e3eb] text-[#F89C23] border-b border-[#F89C23] mt-5'><Link href="/login">LOGIN</Link></p>

            </div>

         </div>

        </div>

        <p className=' text-white text-center mt-8 my-14'> <i> San Francisco City Academy is a program of San Francisco City Impact. </i></p>

     </div>
    
    </div>
  )
}

export default Footer