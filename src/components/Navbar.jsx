"use client";

import React, { useEffect } from "react";

import { signOut } from "next-auth/react";
import AccountMenu from "./DropDown";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

import { useStateContext } from "@/contexts/ContextsProvider";

const Navbar = () => {
  const { logIn, setLogIn } = useStateContext();
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      setLogIn(true);
    }
  }, [sessionStatus]);
  return (
    <div>
      <div className=" py-5 px-6 max-lg:py-3 max-md:py-2 bg-black flex justify-between">
        <div className="my-auto">
          <Link href="/">
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/7cb001d6-dd1a-49fd-aaf5-8a77f24b47b4/logo.png?format=1500w"
                alt="Landscape picture"
                className="  w-[234px] h-[35px]  max-lg:hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
              />
            </picture>
          </Link>

          <Link href="/">
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/ee6c9231-9ad7-4a4d-98ee-6838ee26ee4a/Untitled-5-02.png?format=1500w"
                alt="Landscape picture"
                className=" w-[65px] h-[65px]   lg:hidden  "
              />
            </picture>
          </Link>
        </div>

        <div className="flex ">
          <div className="flex max-lg:hidden items-center h-">
           
           <Link href="/about-us" >
            <p className="text-white my-auto py-3 font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              ABOUT-US
            </p>
           </Link>

           <Link href="/activates">
            <p className="text-white my-auto py-3 ml-6 font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              ACTIVATES
            </p>
           </Link>
           
           <Link href="/school-staff">
            <p className="text-white my-auto py-3 ml-6 font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              SCHOOL-STAFF
            </p>
           </Link>
            {logIn&&
           <Link href="/student-profile">
            <p className="text-white my-auto py-3 ml-6 font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              STUDENT-PROFILE
            </p>
           </Link>
          }

          </div>

          <div className=" ml-10 max-lg:hidden">
            {!logIn ? (
              <Link href="/login">
                <button className=" bg-white my-auto  text-xl py-3 px-6 rounded font-bold max-lg:text-base transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
                  LOGIN
                </button>
              </Link>
            ) : (
              <button
                className=" bg-white my-auto  text-lg py-3 px-3 rounded font-bold max-lg:text-base transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200"
                onClick={() => {
                  setLogIn(false), signOut();
                }}
              >
                LOGOUT
              </button>
            )}
          </div>

          <div className="lg:hidden">
            <AccountMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
