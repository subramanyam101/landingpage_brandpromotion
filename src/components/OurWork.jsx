/* eslint-disable no-unused-vars */

import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";
const OurWork = () => {
  const workData = [
    {
      title: "Brand Promotion",
      description:
        "Promoting apps effectively to reach the right audience and boost downloads.",
      image: assets.BrandPromotion,
    },
    {
      title: "E commerce Building",
      description:
        "Creating responsive, user-friendly websites tailored to client needs.",
      image: assets.Ecommerce,
    },
    {
      title: "Fitness app promotion",
      description:
        "Developing creative strategies to strengthen brand identity and engagement.",
      image: assets.SalesGenerator,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        description="A collection of our recent projects and creative solutions."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-300 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              alt="our works"
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
