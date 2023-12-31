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
                className=" w-[234px] h-[35px]  max-md:hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
              />
            </picture>
          </Link>

          <Link href="/">
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/ee6c9231-9ad7-4a4d-98ee-6838ee26ee4a/Untitled-5-02.png?format=1500w"
                alt="Landscape picture"
                className=" w-[65px] h-[65px]   md:hidden  "
              />
            </picture>
          </Link>
        </div>

        <div className="flex ">
          <div className="flex max-md:hidden">
            <p className="text-white my-auto font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              <Link href="/contact-us">CONTACT-US</Link>
            </p>

            <p className="text-white my-auto ml-6 font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              <Link href="/activates">ACTIVATES</Link>
            </p>

            <p className="text-white my-auto ml-6 font-semibold max-lg:text-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
              <Link href="/school-staff">SCHOOL-STAFF</Link>
            </p>
          </div>

          <div className=" ml-10 max-md:hidden">
            {!logIn ? (
              <Link href="/login">
                <button className=" bg-white my-auto  text-xl py-3 px-6 rounded font-bold max-lg:text-base transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200">
                  LOGIN
                </button>
              </Link>
            ) : (
              <button
                className=" bg-white my-auto  text-base py-1.5 px-2.5 rounded font-medium max-lg:text-base transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200"
                onClick={() => {
                  setLogIn(false), signOut();
                }}
              >
                LOGOUT
              </button>
            )}
          </div>

          <div className="md:hidden">
            <AccountMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
