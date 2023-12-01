"use client";

import React from "react";

import { motion } from "framer-motion";

const FirstSec = () => {
  return (
    <div>
      <div className='z-[1]  relative w-full before:bg-[url("https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/b698c204-e3c2-4bd5-9dae-0e0fb1a07304/hero2-01.jpg")] before:z-[-1]    before:bg-no-repeat before:bg-cover before:bg-center before:left-0 before:bottom-0 before:right-0 before:top-0	 before:absolute  '>
        <div className="grid grid-cols-4 gap-4 px-[10%] py-[7%] max-xl:grid-cols-2 max-md:gap-2 max-sm:gap-0   max-md:grid-cols-1">
          <motion.div
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="max-sm:-mb-16 "
          >
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/63c7c569-c528-443c-be07-18d57d06e54e/home+icons-03.png"
                alt="Landscape picture"
                className=" mx-auto max-md:h-[40%] max-sm:h-[25%]"
              />
            </picture>

            <h1 className=" font-bold  text-4xl text-center mt-2  max-md:text-3xl  max-sm:text-2xl">
              <p>STEAM</p> <p>Curriculum</p>{" "}
            </h1>

            <p className="text-center mt-2 max-sm:text-sm">
              Continued development of a STEAM Lab and Makerspace Kits to
              support students acquiring college and career readiness skills as
              they relate to Science, Technology, Engineering, Arts, and
              Mathematics.
            </p>
          </motion.div>

          <motion.div
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
                  delay: 0.3,
                  duration: 1,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="max-sm:-mb-16  "
          >
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/6d19d628-0913-4c36-b53f-0c209d78b437/home+icons-04.png"
                alt="Landscape picture"
                className="mx-auto max-md:h-[40%] max-sm:h-[25%]"
              />
            </picture>

            <h1 className=" font-bold  text-4xl text-center mt-2 block  max-md:text-3xl max-sm:text-2xl">
              <p>Genius</p> <p>Hours</p>{" "}
            </h1>

            <p className="text-center mt-2 max-sm:text-sm">
              Exploration of Genius Hours or 20 Time in some classrooms, where
              students are given time to explore academic passions or interests
              independently.
            </p>
          </motion.div>

          <motion.div
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="max-sm:-mb-16  "
          >
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/ae23ca3e-e0a1-4cf2-818b-b06013d67bfe/icons-03.png"
                alt="Landscape picture"
                className="mx-auto max-md:h-[40%] max-sm:h-[25%]"
              />
            </picture>

            <h1 className=" font-bold  text-4xl text-center mt-2 max-md:text-3xl max-sm:text-2xl ">
              <p>On-site</p> <p>Library</p>
            </h1>

            <p className="text-center mt-2 max-sm:text-sm">
              Access to an on-site library where students can check out books to
              further boost their literacy skills.
            </p>
          </motion.div>

          <motion.div
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="max-sm:-mb-16  "
          >
            <picture>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61a8126cc492743b6c95b382/cd94d3b6-6128-4072-9d37-ff3982cb1edf/icons-04.png"
                alt="Landscape picture"
                className="mx-auto max-md:h-[40%]  max-sm:h-[25%]"
              />
            </picture>

            <h1 className=" font-bold  text-4xl text-center mt-2  max-md:text-3xl max-sm:text-2xl">
              <p>Community</p> <p>Partners</p>{" "}
            </h1>

            <p className="text-center mt-2 max-sm:text-sm">
              Curation of community partners and context experts to leverage
              their real-world experiences to provide additional learning
              opportunities for students from athletics to arts and more!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FirstSec;
