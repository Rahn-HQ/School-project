"use client"

import React from 'react'

import {motion } from 'framer-motion'

import BackDrop from './BackDrop'

import {AiOutlineCloseCircle} from 'react-icons/ai'

const dropIn={

    hidden:{

     y:"-100vh",
     opacity:0,

    },visible:{

        y:"0",
        opacity:1,
        transition:{

            duration:0.1,
            type:"spring",
            damping:25,
            stiffness:500,

        }

    },exit:{

        y:"100vh",
        opacity:0,

    },

}

const Error = ({handleClose , text}) => {
  return (
   <div>
    <BackDrop onClick={handleClose}>

    
    </BackDrop>
    
    <motion.div onClick={handleClose} className=' rounded-3xl absolute mx-[25%] max-lg:mx-[10%] break-words   max-md:mx-[5%] my-[15%] max-lg:my-[25%] z-10 w-[50%] max-lg:w-[80%]  max-md:w-[90%] text-center py-16  bg-red-600 '
         variants={dropIn}
         initial="hidden"
         animate="visible"
         exit="exit"
         
        >
        
        <p className='my-auto text-white text-5xl font-semibold max-md:text-4xl flex justify-center  break-words  '> <span className='mr-2'><AiOutlineCloseCircle/></span> {text}</p>


        </motion.div>
</div>
  )
}

export default Error