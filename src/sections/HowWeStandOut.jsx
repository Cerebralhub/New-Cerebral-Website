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
    <div className="bg-cerebralBlue">
      <div className="max-w-7xl mx-auto py-20 px-6 xl:px-0">
        {/* title and writeup */}
        <div className="mb-16 flex flex-col md:flex-row justify-between md:gap-10">
          <h2 className=" text-4xl font-semibold mb-8 text-cerebralGrey-600 flex-1">
            How We Stand Out
          </h2>
          <p className="xl:w-1/2 text-cerebralGrey-500 flex-1">
            Your idea needs a simplified transformation tailored for your target
            audience to understand. We are a dedicated team of astute
            professionals in various creative fields with the aim to interpret
            ideas into working, relatable forms.
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 gap-8">
          {features.map((feature, index) => (
            <div className="bg-white p-8 rounded-3xl" key={index}>
              <img src={feature.image} alt="" className="mb-5" />
              <h3 className="text-xl text-cerebralGrey-700 font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-cerebralGrey-500">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
