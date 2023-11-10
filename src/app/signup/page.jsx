"use client"

import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"

import Link from 'next/link'

import { useStateContext } from '@/contexts/ContextsProvider'

import {AiFillCloseCircle} from 'react-icons/ai'

import { useRouter } from 'next/navigation'


const Page = () => {

  const { signUpType, setSignUpType , setLogIn} = useStateContext()

  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
    reset,
    getValues,
  } = useForm()
  
  const onSubmit =(data) =>{

    //here where u send it to the server or data base , console log the "data" to know what is going on
    
    console.log(data)

    reset();

    setLogIn(true)

    router.push("/")

  }

  return (
    <div className=' z-[1] relative w-full before:bg-[url("https://i.ibb.co/wK05Txw/tile-background.webp")] before:z-[-1]    before:bg-no-repeat before:bg-cover before:bg-center before:left-0 before:bottom-0 before:right-0 before:top-0	 before:absolute '>

      <div className=' py-40 w-[50%] max-lg:py-32 max-lg:w-[80%] max-md:py-20 max-md:w-[90%] mx-auto'>

        <div className=' bg-white rounded-xl py-[50px] shadow-3xl'>

          <div className=' text-center mb-10'>

            <h1 className='  text-5xl font-semibold drop-shadow-3xl' >Sign Up</h1>

          </div>

          <form onSubmit={handleSubmit(onSubmit)} >

            <div className='mx-[10%] p-1'>

              <p className=' text-lg font-semibold'>First Name </p>

              <input type='text' {...register("firstName" , { required:'First Name is required'})} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-2 transition-colors ease-in-out delay-100  focus:border-blue-600' />
              
              {errors.firstName&&(<p className=' text-red-500 font-medium flex'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.firstName.message}`}  </p>)}

              
              <p className=' text-lg font-semibold'>Last Name</p>

              <input type='text' {...register("lastName" , { required:'Last Name is required'})}  className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-2 transition-colors ease-in-out delay-100  focus:border-blue-600' />
              
              {errors.lastName&&(<p className=' text-red-500 font-medium flex'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.lastName.message}`}  </p>)}

              
              <p className=' text-lg font-semibold'>Email</p>

              <input type='email' {...register("email" , { required:'Email is required'})} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-2 transition-colors ease-in-out delay-100  focus:border-blue-600' />
              
              {errors.email&&(<p className=' text-red-500 font-medium flex'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.email.message}`}  </p>)}

              
              <p className=' text-lg font-semibold'>Password</p>

              <input type='password' {...register("password", { required:'Password is required' , minLength:{value:8 , message:'Password must be at least 8 characters'}} )} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-2 transition-colors ease-in-out delay-100  focus:border-blue-600' />

              {errors.password&&(<p className=' text-red-500 font-medium flex mb-4'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.password.message}`}  </p>)}

              
              <p className=' text-lg font-semibold'>Confirm Password</p>

              <input type='password' {...register("confirmPassword", { required:'Confirm Password is required' , minLength:{value:8 , message:'Confirm Password must be at least 8 characters'} , validate:(value) => value === getValues("password") || "Password must match"}  )} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-4 transition-colors ease-in-out delay-100  focus:border-blue-600' />

              {errors.confirmPassword&&(<p className=' text-red-500 font-medium flex mb-4'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.confirmPassword.message}`}  </p>)}

              
              <fieldset>
              
                <legend className='text-lg font-semibold'>What are you ?</legend>
              
                 <div className=' flex justify-between  mt-4'>

                  <div className=' w-full '>

                    <div className='flex'>
               
                      <input type="radio" id="Choice1" name="type" value="student" className=' w-5 h-4 my-auto' required onClick={() => setSignUpType(1)} />
               
                      <label  className=' text-lg font-semibold ml-2  my-auto'>Student/Parent</label>
               
                    </div>

                    {signUpType === 1&&
                    <div className={`transition-all duration-300  mt-3 ease max-h-0 overflow-hidden ${signUpType === 1 ? 'max-h-96 delay-300' : ''} `}>
               
                      <p className=' text-lg font-semibold'>Student ID</p>

                      <input type='number' {...register("studentID" , { required:'Student ID is required'})} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-4 transition-colors ease-in-out delay-100  focus:border-blue-600' />
                      
                      {errors.studentID&&(<p className=' text-red-500 font-medium flex'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.studentID.message}`}  </p>)}

                    </div>
                  }
                  
                  </div>
               
                  <div className='w-full '>
               
                    <div className='flex'>
               
                      <input type="radio" id="Choice2" name="type" value="staff" className=' w-5 h-4 my-auto' required onClick={() => setSignUpType(2)} />
               
                      <label  className=' text-lg font-semibold ml-2  my-auto'>Staff</label>
               
                    </div>
                    {signUpType === 2&&

                    <div className={`transition-all duration-300 mt-3  ease max-h-0 overflow-hidden ${signUpType === 2 ? 'max-h-96 delay-300' : ''} `}>
               
                      <p className=' text-lg font-semibold'>Staff Password</p>

                      <input type='password'  {...register("staffPassword", { required:'Staff Password is required' , minLength:{value:8 , message:'Password must be at least 8 characters'}} )} className=' border-[3px]  border-[#aaa] rounded w-full px-2 py-1  outline-none mb-4 transition-colors ease-in-out delay-100  focus:border-blue-600'  />
                      
                      {errors.staffPassword&&(<p className=' text-red-500 font-medium flex mb-4'><span className=' my-auto mr-1'><AiFillCloseCircle/> </span> {`${errors.staffPassword.message}`}  </p>)}

                    </div>
                  }

                  </div>


                </div>

              </fieldset>

              <button type='submit' className='bg-[#142738] text-white w-full mt-5 rounded py-3 text-lg font-semibold transition ease-in-out delay-100    hover:scale-105  duration-200'>SignUp</button>

            </div>

          </form>

          <div className=' text-center  w-full flex justify-center mt-5'>

            <p className=' text-lg font-medium'>Already have an account ? </p>

            <Link href="/login">

              <span className=' text-lg text-blue-600  ml-2  font-bold'> Log In</span>

            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Page