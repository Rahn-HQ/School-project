"use client"

import React from 'react'

import {motion} from 'framer-motion'
 
const BackDrop = ({childern , onClick}) => {
  return (
    <motion.div className=' before:absolute before:top-0 before:left-0 before:h-full before:w-full  before:bg-[#000000e1] flex items-center justify-center' onClick={onClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    
        {childern}
    
    </motion.div>
  )
}

export default BackDrop