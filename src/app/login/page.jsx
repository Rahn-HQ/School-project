"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Link from 'next/link'
import { useStateContext } from '@/contexts/ContextsProvider'
import {AiFillCloseCircle} from 'react-icons/ai'
import axios from "axios";
import { useRouter } from 'next/navigation'


const Page = () => {

  const { signUpType, setSignUpType , setLogIn } = useStateContext()
  const [loading , setLoading] = React.useState(false);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
    reset,
    getValues,
  } = useForm()
  
  const onSubmit = async(data) =>{
    console.log(data)
    const user = {
      email : data.email,
      password : data.password
    };
    try {
      setLoading(true);
      const res = await axios.post("/api/users/login", user);
      console.log("Login Success", res.data);
      setLogIn(true)
      reset();
      router.push("/");
    } catch (error) {
      console.log("Login faile", error);
      reset();
      router.push("/login")
    } finally {
      setLoading(false);
    }
    reset();
  }

  return (
    <div className=' z-[1] relative w-full before:bg-[url("https://i.ibb.co/wK05Txw/tile-background.webp")] before:z-[-1]    before:bg-no-repeat before:bg-cover before:bg-center before:left-0 before:bottom-0 before:right-0 before:top-0	 before:absolute '>
      
      <div className=' py-40  w-[50%] max-lg:py-32 max-lg:w-[80%] max-md:py-20 max-md:w-[90%] mx-auto'>
      
      <div  className=' bg-white rounded-xl py-[50px] shadow-3xl'>
          
          <div className=' text-center mb-10'>
            
            <h1 className='  text-5xl font-semibold drop-shadow-3xl' >{loading ? "Processing" : "Log In"}</h1>
          
          </div>

            <form onSubmit={handleSubmit(onSubmit)}>

             <div className='mx-[10%] p-1'>
            
             <p className=' text-lg font-semibold'>Email</p>

              <input type='email' {...register("email" , { required:'Email is required'})}  className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-2 transition-colors ease-in-out delay-100  focus:border-blue-600' />

              {errors.email&&(<p className=' text-red-500 font-medium flex'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.email.message}`}  </p>)}

              <p className=' text-lg font-semibold'>Password</p>

              <input type='password'  {...register("password", { required:'Password is required' , minLength:{value:8 , message:'Password must be at least 8 characters'}} )} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-4 transition-colors ease-in-out delay-100  focus:border-blue-600' />
              
              {errors.password&&(<p className=' text-red-500 font-medium flex mb-4'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.password.message}`}  </p>)}

              <button type='submit' disabled={isSubmitting} className='bg-[#142738] text-white w-full rounded py-3 text-lg font-semibold transition ease-in-out delay-100    hover:scale-105  duration-200'>LogIn</button>

             </div>
            
            </form>

            <div className=' text-center  w-full flex justify-center mt-5'>
              
              <p className=' text-lg font-medium'>Don&apos;t have an account yet? </p> 
              
              <Link href="/signup">
              
                <span className=' text-lg text-blue-600  ml-2  font-bold' onClick={() => setSignUpType(0)}> Sign Up</span> 
              
              </Link>

            </div>
          
          </div>
      
        </div>
    </div>
  )
}

export default Page