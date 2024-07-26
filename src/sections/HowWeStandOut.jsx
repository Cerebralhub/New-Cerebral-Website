import React from "react";
import simpleSvg from "../assets/svg/simple.svg";
import creativeSvg from "../assets/svg/creative.svg";
import engagingSvg from "../assets/svg/engaging.svg";

const features = [
  {
    image: simpleSvg,
    title: "Simple ",
    body: "Great content shouldn't be rocket science to grasp. Practically, we help you transform your idea in a way that a six-year-old can understand.",
  },
  {
    image: engagingSvg,
    title: "Engaging",
    body: " At the core of our work is the passion to keep every audience engaged, that's why our content is enhanced with sprinkles of our Cerebral magic dust.",
  },
  {
    image: creativeSvg,
    title: "Creative",
    body: "In simple terms, we like to think outside the box. So, when it comes to crafting the content that works for any audience, our creative stream never runs dry.",
  },
];

export const HowWeStandOut = () => {
  return (
    <div className="bg-cerebralBlue-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* title and writeup */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col lg:flex-row justify-between lg:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-0 text-cerebralGrey-600 lg:w-1/2">
            How We Stand Out
          </h2>
          <p className="text-sm sm:text-base text-cerebralGrey-500 lg:w-1/2">
            Your idea needs a simplified transformation tailored for your target
            audience to understand. We are a dedicated team of astute
            professionals in various creative fields with the aim to interpret
            ideas into working, relatable forms.
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl"
              key={index}
            >
              <img
                src={feature.image}
                alt=""
                className="mb-3 sm:mb-4 md:mb-5"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl text-cerebralGrey-700 font-semibold mb-2 sm:mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-cerebralGrey-500">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
