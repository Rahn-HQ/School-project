"use client";
import React , { useState, FormEvent, ChangeEvent } from 'react'
import {FirstSec, Footer, Header, Navbar, SecondSec, ThirdSec} from '../../components'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const initState = {
  name: "",
  email: "",
  message: "",
};
const AboutUs= () => {


  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    const { name, email, message } = data;
    //Send data To API route
    const res = await fetch("http://localhost:3000/api/users/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const result = await res.json();
    console.log(result);
    router.push(`/thank-you/`);
  };

  const handleChange = (
    e
  ) => {
    const name = e.target.name;
    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean)
  return (
    <div className=' overflow-x-hidden overflow-y-hidden'>
    
     <Header img="https://i.ibb.co/H238whZ/Banner-About-1.webp" title="ABOUT SAN FRANCISCO CITY ACADEMY"/>
      
      <section className=' bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23] py-14'>
       <div className=' w-[60%] max-lg:w-[95%] text-center  mx-auto my-20 '>

        <motion.h3 className=' text-5xl max-lg:text-3xl font-semibold mb-5'
                      variants={{
                hidden: {
                  x: -50,
                  opacity: 0,
                },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.5,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
        
        >Our Mission</motion.h3>
        <motion.p
        
        variants={{
                hidden: {
                  opacity: 0,
                },
                show: {
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.5,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
        
        >The Mission of The San Francisco City Academy for Children is to empower our children to achieve their greatest potential both as students and as members of their communities.</motion.p>

       </div>
      </section>

      <section className='px-10 max-lg:px-2 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23]'>

        <div className=' flex max-lg:block'>

            <motion.div className='w-[50%] max-lg:w-[100%] bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23] border-[10px] border-black  rounded-md'
            
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
            
            >

              <picture >
                <img
                 src='https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/451dbcd6-6222-4f7d-97db-712c956b34d4/dsc04285.jpg?format=1500w'
                 alt="Landscape picture"
                 className=" h-full  object-cover HeaderPic  "
                />
              </picture>   

            </motion.div>
            
            <div className='w-[50%]  max-lg:w-[100%] max-lg:px-1  bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23]   from-[#f89c23] to-[#142738]  text-left p-10'>
            
                <h3 className='text-[42px]  max-lg:text-[28px] font-semibold mb-5'>What We Offer</h3>
                <p className='text-[18px] '>Throughout each school day, students will engage with standards-aligned content through direct instruction, collaborative group work, and individualized tasks to ensure not just knowledge acquisition, but relevant application. Our small class sizes allow for individualized attention throughout the learning process, supporting all students to achieve high expectations and develop a strong academic foundation.</p>
                
                {/* <h3 className='text-[42px]  font-semibold mb-5  mt-10'>A place to belong</h3>
                <p className='text-[18px] '>Park University’s core values are academic excellence, inclusivity and social responsibility. Diversity is in our DNA — Park’s first graduating class included four women. Today, we welcome more than 260 international students from 60 countries.</p> */}
            </div>

        </div>

        <div className=' flex max-lg:block pt-5 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23]'>


            
            <div className=' max-lg:hidden w-[50%] max-lg:w-[100%] max-lg:px-1 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23]   from-[#f89c23] to-[#142738]  text-left p-10'>
            
                <h3 className='text-[42px] max-lg:text-[28px] font-semibold mb-5'>We Believe.</h3>
                <p className='text-[18px] '>SFCA offers a faith-based education for students to develop a strong Biblical and Christ-centered foundation. Students will attend weekly chapels and engage in daily Bible lessons, including worship and prayer. Our teaching staff and school leadership adhere to SFCI statement of faith and teach and lead students in Christ-centered character, that is infused into all aspects of teaching and learning.</p>
                
                {/* <h3 className='text-[42px]  font-semibold mb-5 mt-10'>The Parkville campus</h3>
                <p className='text-[18px] '>Park University’s 700-acre, wooded flagship campus is in Parkville, Mo., a historic town on the banks of the Missouri River, just minutes from the cosmopolitan center of Kansas City. The campus is anchored by Mackay Hall, built in 1886 by students who quarried the stone from the school’s land, carried it to the site and built the structure as a means of earning their tuition. With its clock tower overlooking the more modern facilities around it, Mackay Hall has become the symbol of the University.</p> */}
            </div>

            <motion.div className='w-[50%] max-lg:w-[100%]  border-[10px] border-black  rounded-md'
            
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

              <picture >
                <img
                 src='https://www.pewresearch.org/wp-content/uploads/2023/09/SR_23.09.07_InstructionalTime_feature-jpg.webp'
                 alt="Landscape picture"
                 className=" h-full  object-cover  max-md:h-[400px] HeaderPic  "
                />
              </picture>   

            </motion.div>

            <div className='  lg:hidden w-[50%] max-lg:w-[100%] max-lg:px-1 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23]   from-[#f89c23] to-[#142738]  text-left p-10'>
            
                <h3 className='text-[42px] max-lg:text-[28px] font-semibold mb-5'>We Believe.</h3>
                <p className='text-[18px] '>SFCA offers a faith-based education for students to develop a strong Biblical and Christ-centered foundation. Students will attend weekly chapels and engage in daily Bible lessons, including worship and prayer. Our teaching staff and school leadership adhere to SFCI statement of faith and teach and lead students in Christ-centered character, that is infused into all aspects of teaching and learning.</p>
                
                {/* <h3 className='text-[42px]  font-semibold mb-5 mt-10'>The Parkville campus</h3>
                <p className='text-[18px] '>Park University’s 700-acre, wooded flagship campus is in Parkville, Mo., a historic town on the banks of the Missouri River, just minutes from the cosmopolitan center of Kansas City. The campus is anchored by Mackay Hall, built in 1886 by students who quarried the stone from the school’s land, carried it to the site and built the structure as a means of earning their tuition. With its clock tower overlooking the more modern facilities around it, Mackay Hall has become the symbol of the University.</p> */}
            </div>

        </div>

           <div className=' flex max-lg:block pt-5 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23] pb-10 '>

            <motion.div className='w-[50%] max-lg:w-[100%] bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23] border-[10px] border-black  rounded-md'
            
            
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
            
            >

              <picture >
                <img
                 src='https://www.reigate-school.surrey.sch.uk/ckfinder/userfiles/images/Reigate_School_Home_1.jpg'
                 alt="Landscape picture"
                 className=" h-full  object-cover HeaderPic  "
                />
              </picture>   

            </motion.div>
            
            <div className='w-[50%] max-lg:w-[100%] max-lg:px-1 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#f89c23]   from-[#f89c23] to-[#142738]  text-left p-10'>
            
                <h3 className='text-[42px] max-lg:text-[28px] font-semibold mb-5'>GOAL.</h3>
                <p className='text-[18px] '>Research shows that certain underlying characteristics are necessary for student success. Those characteristics are emphasized throughout the year.They are how SFCA students hit their G.O.A.L (God first, Ownership, Access & Inclusion, Love your Neighbor).</p>
                
                {/* <h3 className='text-[42px]  font-semibold mb-5  mt-10'>A place to belong</h3>
                <p className='text-[18px] '>Park University’s core values are academic excellence, inclusivity and social responsibility. Diversity is in our DNA — Park’s first graduating class included four women. Today, we welcome more than 260 international students from 60 countries.</p> */}
            </div>

        </div>


      </section>

      <section className=' max-lg:p-2 max-lg:pt-5 bg-[url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")] bg-[#1a4165] p-10 text-white'>

        <h1 className=' text-[42px] ml-10 mb-10 max-lg:ml-0 max-lg:text-3xl'>Contact Us</h1>

        <h1 className="text-4xl mb-7 text-center max-lg:text-2xl max-lg:text-left ">Call us at 415.345.0924 or fill out the form below.</h1>

        <motion.form onSubmit={handleSubmit} className="flex flex-col mx-auto max-w-3xl p-6 max-lg:p-0 "
        
        variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              show: {
                y: 0,
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


            <label className="text-2xl mb-1 max-lg:text-xl" htmlFor="name">Name:</label>
            <input
                className="p-3 mb-6 text-2xl max-lg:p-1.5 max-lg:text-xl rounded-2xl text-black bgtra"
                type="text"
                id="name"
                name="name"
                placeholder="Jane"
                pattern="([A-Z])[\w+.]{1,}"
                value={data.name}
                onChange={handleChange}
            />

            <label className="text-2xl mb-1 max-lg:text-xl" htmlFor="email">Email:</label>
            <input
                className="p-3 mb-6 text-2xl rounded-2xl max-lg:p-1.5 max-lg:text-xl text-black"
                type="email"
                id="email"
                name="email"
                placeholder="Jane@yoursite.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                value={data.email}
                onChange={handleChange}
            />

            <label className="text-2xl mb-1 max-lg:text-xl" htmlFor="message">Message:</label>
            <textarea
                className="p-3 mb-6 text-2xl resize-none max-lg:p-1.5 max-lg:text-xl  rounded-2xl text-black"
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={5}
                cols={33}
                value={data.message}
                onChange={handleChange}
            />



{/*      if u put    disabled={!canSave}  it will be disabled u have to put it in a if (stateName && disabled ) */}
            <button
                className="p-3 mb-6 ml-[70%] max-lg:ml-[80%] max-lg:p-1 max-lg:text-xl  resize-none text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-slate-300 disabled:hidden"
            >Submit</button>

        </motion.form>

      </section>

    </div>
  )
}

export default AboutUs