"use client";
import React , { useEffect } from 'react'
import { Header } from '../../components'
import { info , marksInfo } from '../../utils/studentInfo'
import { motion } from 'framer-motion';


import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const Student = () => {
  // const { data: session, status: sessionStatus } = useSession(); 
  // const router = useRouter();   
  // useEffect(() => {
  //   if (sessionStatus !== "authenticated") {
  //     router.replace("/login");
  //   }
  // }, [sessionStatus, router]);
  return (
    // sessionStatus === "authenticated" && (
    <div className='bg-[url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png")]
    overflow-x-hidden overflow-y-hidden  bg-white   '>

      <div>
        <Header img="https://i.postimg.cc/fL9wv380/asdf.jpg" title="SFCA STUDENT PROFILE " />
      </div>
      <h1 className=' text-black text-[42px] pl-10 max-md:pl-4 my-10 max-lg:ml-0 max-lg:text-3xl max-md:text-2xl'>
        MALEK PROFILE</h1>

      <motion.div className='relative flex justify-center
      pt-5  object-cover h-full w-full
      pb-10 overflow-x-hidden overflow-y-hidden
      max-sm:bg-none max-sm:bg-white
      max-lg:bg-none
       '

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
      >



        <div
          className='w-[80%]  bg-slate-100
          rounded-lg mb-10
          max-sm:w-full max-sm:bg-white
          max-lg:w-full max-lg:bg-white
           '
        >

          {/* picture of student  */}
          <div className='flex justify-center m-auto
          w-[200px] h-[200px]
          max-md:w-[150px] max-md:h-[150px] overflow-hidden my-5
            max-lg:w-[175px] max-lg:h-[150px]
          '>
            <picture>
              <img
                className="rounded-full "
                src="https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
                alt="Student Picture"
              />
            </picture>
          </div>


          {/*Student Info  */}
          <div
            className='m-5  p-4
            rounded-3xl  grid grid-cols-2
             max-sm:grid-cols-1
            max-sm:w-full max-sm:p-0 max-sm:m-0
            max-sm:rounded-none
             '
          >
            {info.map((inf, index) => (
              <div
                className=' m-1 '
                key={index}
              >
                <div
                  className='flex justify-start
                  bg-slate-200 p-2
                  pl-4 ml-3 my-2 rounded-xl
                italic text-2xl font-bold
                max-sm:w-[90%]

                '
                >
                  {inf.Lable}
                </div>

                <div
                  className='flex justify-start pl-4
                 w-[90%] ml-3 mb-5 p-3 shadow-xl
                 rounded-xl bg-slate-100
                 italic text-2xl font-semibold
                 max-sm:w-[80%]
                '
                >

                  {inf.Content}
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>


      <h1 className=' text-black text-[42px] pl-10 max-md:pl-4 my-10 max-lg:ml-0 max-lg:text-3xl max-md:text-2xl'>
        MALEK MARKS</h1>


        <motion.div className='relative flex justify-center
      pt-5  object-cover h-full w-full
      pb-10 overflow-x-hidden overflow-y-hidden
      max-sm:bg-none max-sm:bg-white
      max-lg:bg-none
       '

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
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div
          className='w-[80%]  bg-slate-200
          rounded-lg mb-10
          max-sm:w-full max-sm:bg-white
          max-lg:w-full max-lg:bg-white
          p-5
           '
        >

          <div
            className='m-5  p-4
            rounded-3xl  grid grid-cols-2
             max-sm:grid-cols-1
            max-sm:w-full max-sm:p-0 max-sm:m-0
            max-sm:rounded-none
             '
          >
          {/* here loop over them and put the marks , first one for the  subject and the second one for the mark  */}
            {marksInfo.map((inf, index) => (
              <div
                className=' m-1 '
                key={index}
              >
                <div
                  className='flex justify-start
                  bg-slate-100 p-2 
                  pl-4 ml-3 my-2 rounded-xl
                italic text-2xl font-bold
                max-sm:w-[90%]

                '
                >
                  {inf.Lable}
                </div>

                <div
                  className='flex justify-start pl-4
                 w-[90%] ml-3 mb-5 p-3 shadow-xl
                 rounded-xl bg-slate-200
                 italic text-2xl font-semibold
                 max-sm:w-[80%]
                '
                >

                  {inf.Content}
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  )
//  );
};

export default Student