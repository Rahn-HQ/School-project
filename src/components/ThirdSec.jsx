import React from 'react'

const ThirdSec = () => {
  return (
    <div>
    
     <div className='z-[1]  relative w-full before:bg-[url("https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/a7de54a8-30ad-418d-a018-7af3cb1f0f43/background20-01.png")] before:z-[-1]    before:bg-no-repeat before:bg-cover before:bg-center before:left-0 before:bottom-0 before:right-0 before:top-0	 before:absolute  '>
      
      <div className='pt-[7%] pb-[3%] px-[15%] max-xl:px-[5%]'>

        <h1 className=' text-6xl text-center font-semibold w-full max-md:text-4xl'>Health and Wellness</h1>

      </div>

      <div className='grid grid-cols-3 gap-4 px-[15%] pb-[7%] max-xl:px-[6%] max-md:gap-2 max-sm:gap-0   max-md:grid-cols-1'>

        <div className='max-sm:-mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>

         <picture>
       
            <img
            src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/5af45442-2275-46d8-93aa-9f5d67e39a83/Extras-02.png"
            alt="Landscape picture"
            className=' mx-auto max-md:h-[40%] max-sm:h-[25%]'
             />
      
         </picture>
         
          <h1 className='  font-medium  text-4xl text-center mt-2  max-md:text-3xl  max-sm:text-2xl'>School Lunches</h1>

          <p className='text-center mt-2 max-sm:text-sm'>Nutritious food is an important part of a child learning and development. Each student has access to free snacks and a balanced lunch each day to help students thrive in the classroom.</p>
        </div>

        <div className='max-sm:-mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>

         <picture>
       
            <img
            src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/2c058b5b-4b5f-401b-890c-036d63321324/Extras-03.png"
            alt="Landscape picture"
            className='mx-auto max-md:h-[40%] max-sm:h-[25%]'
             />
      
         </picture>
         
          <h1 className=' font-medium  text-4xl text-center mt-2 block  max-md:text-3xl max-sm:text-2xl'>COVID </h1>

          <p className='text-center mt-2 max-sm:text-sm'>SFCA continues to follow the guidelines and requirements San Francisco Unified School District set forth.</p>
        </div>

        <div className='max-sm:-mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>

         <picture>
       
            <img
            src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/18d25177-f5e9-460a-bd27-e17277064437/Extras-04.png"
            alt="Landscape picture"
            className='mx-auto max-md:h-[40%] max-sm:h-[25%]'
             />
      
         </picture>
         
          <h1 className=' font-medium  text-4xl text-center mt-2 max-md:text-3xl max-sm:text-2xl '>Outdoor Activities</h1>

          <p className='text-center mt-2 max-sm:text-sm'>Playtime is integral to a child social, emotional, and cognitive development. Our students receive outdoor playtime each day to develop curiosity and understand the importance of staying active.</p>
        </div>

        
        

      </div>

     </div> 

    </div>
  )
}

export default ThirdSec