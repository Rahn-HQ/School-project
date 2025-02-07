"use client";
import React , { useEffect } from 'react'
import { Header} from '../../components'
import { StaffInfo} from '../../utils/schoolStaff.js'
import { motion } from 'framer-motion';

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const Staff = () => {

  const { data: session, status: sessionStatus } = useSession(); 
  const router = useRouter();   
  // useEffect(() => {
  //   if (sessionStatus !== "authenticated") {
  //     router.replace("/login");
  //   }
  // }, [sessionStatus, router]);

  return (
    // sessionStatus === "authenticated" && (
    <div className='bg-gradient-to-br from-[#1D3342] to-[#32536F] pb-5 overflow-x-hidden overflow-y-hidden'>

    <div>  
    
     <Header img="https://i.postimg.cc/FHPyss2v/pe23-21.jpg" title="SFCA SCHOOL STAFF"/>
    
    </div>  

    <h1 className=' text-white text-[42px] pl-10 max-md:pl-4 my-10 max-lg:ml-0 max-lg:text-3xl max-md:text-2xl'>OUR STAFF</h1>

    <div  className=' pb-5 mb-10 grid grid-cols-2 max-xl:grid-cols-1  h-[100vh] overflow-y-auto overflow-x-hidden mx-4 max-md:mx-0 '>

    {StaffInfo.map((staff , id) => (


       <motion.div key={id} className=' my-5 w-[45vw] max-xl:w-[80vw] max-md:w-[90vw] mx-auto rounded-xl bg-gradient-to-br from-[#f9f9f9] to-[#939393] h-[200px] max-md:h-auto flex max-md:block '
       
       variants={{
              hidden: {
                x: id%2==0?100:-100,
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

          <div className=' w-[35%] bg-gradient-to-br from-[#df1d1d] to-[#940202] rounded-s-xl max-md:rounded-es-none max-md:rounded-t-xl flex justify-center items-center max-md:w-full'>

          <picture >
                <img
                 src={staff.img}
                 alt="Landscape picture"
                 className=" w-[150px] h-[150px] max-md:w-[120px] max-md:h-[120px] rounded-full object-cover max-md:my-3"
                />
          </picture>   

          </div>

          <div className=' flex justify-around w-[80%] max-md:w-full max-md:block max-md:px-4'>

            <div className=' flex  flex-col max-md:flex-row justify-around max-md:justify-start  max-md:my-5 '>

            <div className=' max-md:flex max-md:w-[50%]'><p className=' italic text-lg max-md:text-base '>Name :&nbsp; </p>   <p className='  text-xl font-semibold max-md:text-base'> {staff.name}</p></div>
            <div className=' max-md:flex max-md:w-[50%]'><p className=' italic text-lg max-md:text-base'>Occupation :&nbsp;</p>   <p className='  text-xl font-semibold max-md:text-base'>{staff.occupation}</p></div>

            </div>

            <div className=' flex  flex-col max-md:flex-row justify-around  max-md:my-5'>

            <div className=' max-md:flex max-md:w-[50%]'><p className=' italic text-lg max-md:text-base'>Age :&nbsp;</p>   <p className='  text-xl font-semibold max-md:text-base'> {staff.age}</p></div>
            <div className=' max-md:flex max-md:w-[50%]'><p className=' italic text-lg max-md:text-base'>Phone :&nbsp;</p>   <p className='  text-xl font-semibold max-md:text-base'>{staff.phone}</p></div>

                
            </div>

            <div className=' flex  flex-col max-md:flex-row justify-around  max-md:my-5'>

            <div className=' max-md:flex max-md:w-[50%]'><p className=' italic text-lg max-md:text-base'>Grade :&nbsp;</p>   <p className='  text-xl font-semibold max-md:text-base'>{staff.grade}</p></div>
            <div className=' max-md:flex max-md:w-[50%]'><p className=' italic text-lg max-md:text-base'>Subject :&nbsp;</p>   <p className='  text-xl font-semibold max-md:text-base'>{staff.subject}</p></div>

                
            </div>

          </div>


       </motion.div> 

))}
</div>

    </div>
  )
//  );
};

export default Staff