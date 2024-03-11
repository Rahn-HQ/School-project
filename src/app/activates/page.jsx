"use client";
import React from 'react'
import {FirstSec, Footer, Header, Navbar, SecondSec, ThirdSec} from '../../components'
import { motion } from "framer-motion";

const Activates = () => {
  return (
    <div className='bg-[url("https://sib.illinois.edu/sites/default/files/styles/hero_image/public/paragraphs/hero/2023-09/faded-research-icon-wallpaper-web-banner2.png.jpg?itok=XmiHcd1h")] pb-5 overflow-x-hidden overflow-y-hidden'>

    <div>  
    
     <Header img="https://i.ibb.co/3hc3BQR/original.jpg" title="SAN FRANCISCO CITY ACADEMY ACTIVATES"/>
    
    </div>  

    <h1 className=' text-white text-[42px] pl-10 max-md:pl-4 my-10 max-lg:ml-0 max-lg:text-3xl max-md:text-2xl'>UPCOMING EVENTS</h1>

    <div className=' bg-[url("https://sib.illinois.edu/sites/default/files/styles/hero_image/public/paragraphs/hero/2023-09/faded-research-icon-wallpaper-web-banner2.png.jpg?itok=XmiHcd1h")] flex justify-center items-center p-10 max-lg:p-4'>  

    <motion.iframe className=' rounded-lg w-[60%] max-lg:w-[100%]  h-[90vh] max-md:h-[70vh] max-sm:h-[50vh]' src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FDamascus&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"  width="100%" height="100%" frameborder="0" scrolling="no"
    
    variants={{
              hidden: {
                x: -100,
                // y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
                opacity: 0,
              },
              show: {
                x: 0,
                //y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.3,
                  duration: 1,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
    
    ></motion.iframe>    
    
    </div> 
  
    <h1 className=' text-white text-[42px] pl-10 max-md:pl-4 my-10 max-lg:ml-0 max-lg:text-3xl max-md:text-2xl'>OUR LOCATION</h1>

    <div className=' bg-[url("https://sib.illinois.edu/sites/default/files/styles/hero_image/public/paragraphs/hero/2023-09/faded-research-icon-wallpaper-web-banner2.png.jpg?itok=XmiHcd1h")] flex justify-center items-center p-2 '>   
  
      <motion.iframe className=' rounded-lg w-[98%] max-lg:w-[100%]  h-[90vh] max-md:h-[70vh] max-sm:h-[65vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.279142538184!2d-122.40981147569323!3d37.78349747198319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085546d0171%3A0x406aaa6341e76194!2sSF%20City%20Academy!5e0!3m2!1sar!2s!4v1709998447591!5m2!1sar!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      
      variants={{
              hidden: {
                x: 100,
                // y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
                opacity: 0,
              },
              show: {
                x: 0,
                //y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.2,
                  duration: 1,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
      
      ></motion.iframe>
  
    </div> 

    </div>
  )
}

export default Activates