'use client'

import React from 'react'

import Link from 'next/link'

import { useStateContext } from '@/contexts/ContextsProvider'

import {MdKeyboardArrowDown , MdKeyboardArrowUp} from 'react-icons/md'

const SecondSec = () => {

  const {secondSecOP, setSecondSecOP} = useStateContext()

  return (
    <div>
    
     <div className='z-[1] p-5 relative w-full bg-fixed  before:bg-[url("https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/5f1769d2-0ffd-447d-87d8-566fe6cb4f52/background4-01.jpg")] before:z-[-1]    before:bg-no-repeat before:bg-cover before:bg-center before:left-0 before:bottom-0 before:right-0 before:top-0	 before:absolute  ' >
      
      <div className='flex justify-between  mx-[15%] max-xl:mx-[5%] max-lg:mx-[3%] max-md:mx-[2%]   py-[5%] max-md:block'>

        <div className=' w-[50%]  max-md:w-[100%]' onClick={() => setSecondSecOP(0)}>

          <h1 className='text-white text-5xl text-left mr-[40px] max-lg:mr-[0px] max-md:text-[35px]  '>Our Educational Structure</h1>

          <p className='text-white  text-left mt-5 mr-[40px]  max-lg:mr-[0px]  max-md:text-[16px] '>San Francisco City Academy seeks to inspire students to become lifelong learners through a creative and rigorous curriculum. Throughout each school day, students will engage with standards-aligned content through direct instruction, collaborative group work, and individualized tasks to ensure not just knowledge acquisition, but relevant application. Our small class sizes allow for individualized attention throughout the learning process, supporting all students to achieve high expectations and develop a strong academic foundation.</p>

          <button className=' bg-[#F89C23] my-auto mt-7 max-md:text-sm  py-3 px-6 rounded font-bold max-lg:text-base transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200'><Link href="/school-staff">LEARN MORE</Link></button>

        </div>
        
        <div className=' w-[40%] my-auto max-md:w-[100%] bg-fixed'>

          <p className=' hover:text-[#F89C23] flex justify-between transition-colors delay-100 hover:border-[#F89C23] text-white  text-left mt-5 text-2xl max-md:text-xl border-b  border-[#aaa] py-2  cursor-pointer ' onClick={() => setSecondSecOP(1)}><span>Kindergarten - Second Grade</span> <span  className=' text-4xl my-auto'> {secondSecOP!==1?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp/>} </span> </p>
          <p className={`text-[#d0d0d0] text-left mt-5 transition-all duration-300  ease max-h-0 overflow-hidden ${secondSecOP === 1 ? 'max-h-96 delay-300' : ''} `}>Foundational skills are critical in the lower elementary ages, and our curriculum emphasizes acquiring those skills in a way that aligns with the developmental needs of students. </p>

          <p className=' hover:text-[#F89C23] flex justify-between transition-colors delay-100 hover:border-[#F89C23] text-white  text-left mt-5 text-2xl max-md:text-xl border-b  border-[#aaa] py-2 cursor-pointer' onClick={() => setSecondSecOP(2)}> <span> Third Grade - Fifth Grade </span> <span  className=' text-4xl my-auto'> {secondSecOP!==2?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp/>} </span></p>
          <p className={`text-[#d0d0d0] text-left mt-5 transition-all duration-300  ease max-h-0 overflow-hidden ${secondSecOP === 2 ? 'max-h-96 delay-300' : ''} `} >As upper elementary students lean into the foundation built in the lower grades, skills begin to focus on fluency and comprehension, with a greater emphasis on application.</p>

          <p className=' hover:text-[#F89C23] flex justify-between transition-colors delay-100 hover:border-[#F89C23] text-white  text-left mt-5 text-2xl max-md:text-xl border-b  border-[#aaa] py-2 cursor-pointer'  onClick={() => setSecondSecOP(3)}><span>Middle School </span><span  className=' text-4xl my-auto'> {secondSecOP!==3?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp/>} </span></p>
          <p className={`text-[#d0d0d0] text-left mt-5 transition-all duration-300  ease max-h-0 overflow-hidden ${secondSecOP === 3 ? 'max-h-96 delay-300' : ''} `} >With students preparing for high school, content and tasks become more complex, bringing in high-order thinking skills and deepening connections between foundational skills and creative application.  </p>

        </div>
        
      </div>
     
     </div>

    </div>
  )
}

export default SecondSec