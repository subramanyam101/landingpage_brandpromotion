import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

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
        image:assets.Ecommerce
    },
    {
      title: "Fitness app promotion",
      description:
        "Developing creative strategies to strengthen brand identity and engagement.",
        image:assets.SalesGenerator
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        description="A collection of our recent projects and creative solutions."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {
        workData.map((work,index)=>(
        <div key={index} className="hover:scale-102 duration-300 transition-all cursor-pointer">
            <img src={work.image} alt="our works" className="w-full rounded-xl"/>
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default OurWork;
