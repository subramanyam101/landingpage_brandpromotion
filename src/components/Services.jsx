/* eslint-disable no-unused-vars */

import React from "react";
import assets from "../assets/assets.js";
import Title from "./Title.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { motion } from "motion/react";

const Services = () => {
  const serviceData = [
    {
      title: "Advertising",
      description:
        "We create eye-catching ads that help your brand reach the right audience across digital platforms and increase visibility.",
      icon: assets.ads_icon,
    },
    {
      title: "Branding",
      description:
        "We help build a strong brand identity with logos, colors, and messaging that makes your business memorable and trustworthy.",
      icon: assets.content_icon, 
    },
    {
      title: "Marketing",
      description:
        "We plan and run marketing strategies to promote your products, attract customers, and grow your business effectively.",
      icon: assets.marketing_icon,
    },
    {
      title: "Web Development",
      description:
        "We design and develop fast, responsive, and user-friendly websites that work smoothly on all devices.",
      icon: assets.social_icon, // placeholder
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="reltive flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt="bg_image"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help ?"
        description="From strategy to execution, we craft digital solutions that move your business forward"
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
