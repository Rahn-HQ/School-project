"use client";

import React from "react";

import "../app/globals.css";

import { motion } from "framer-motion";

const Header = ({img , title}) => {
  return (
    <div className="relative">
      <picture className="HeaderPic">
        <img
          src={img}
          alt="Landscape picture"
          className=" w-full object-cover max-md:h-[400px] HeaderPic  "
        />
      </picture>

      <div className=" absolute z-10  left-[15%] right-[15%] top-[50%]">
        <motion.p
          variants={{
            hidden: {
              y: -50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1,
                delay: 0,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" text-white text-5xl max-lg:text-3xl lg:font-medium text-center "
        >
          {title}
        </motion.p>

        <picture className=" ">
          <motion.img
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
            src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/ee6c9231-9ad7-4a4d-98ee-6838ee26ee4a/Untitled-5-02.png?format=1500w"
            alt="Landscape picture"
            className=" w-[100px] h-[100px]  mx-auto max-lg:hidden  transition ease-in-out delay-150  hover:translate-y-1 hover:scale-110  duration-300  hover:drop-shadow-2xl  "
          />
        </picture>
      </div>
    </div>
  );
};

export default Header;
