import React from "react";
import contentCreationImage from "../assets/webp/contentCreation.webp";
import policyAdvisoryImage from "../assets/webp/policyAdvisory.webp";
import strategicCommunicationImage from "../assets/webp/strategicCommunication.webp";
import arrowSvg from "../assets/svg/right-arrow-svg.svg";

const features = [
  {
    image: contentCreationImage,
    title: "Content Creation",
    body: "We are a team of creative experts and we create authentic professional content from scratch to finish.",
    actionButtonText: "Learn More",
  },
  {
    image: policyAdvisoryImage,
    title: "Policy Advisory",
    body: "We help review, fine-tune, and provide advice for effective policy development.",
    actionButtonText: "Learn More",
  },
  {
    image: strategicCommunicationImage,
    title: "Strategic Communication",
    body: "How the public perceives your brand is of utmost importance, that is why we deploy our expertise in communication to portray your organization in the best light.",
    actionButtonText: "Learn More",
  },
];

export const WhatWeDo = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* title and writeup */}
        <div className="mb-16">
          <h2 className=" text-5xl font-semibold mb-8 text-cerebralGrey-600">
            What We Do
          </h2>
          <p className="xl:w-1/2 text-cerebralGrey-500">
            We interpret and create vivid imagery of your ideas using simple
            storytelling and creative tools to keep your audience thoroughly
            engaged. Whether in print or digital format, we think about what
            your idea should and can be, and then we tell and sell a story where
            your idea takes on a simple, yet distinctive and relatable visual
            form. Your ideas won&apos;t keep, something has to bring them to
            life - and that&apos;s where we come in.
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index}>
              <img src={feature.image} alt="" className="mb-5" />
              <h3 className="text-xl text-cerebralGrey-700 font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="w-11/12 text-cerebralGrey-500">{feature.body}</p>
              <div className="group font-semibold flex items-center py-3 w-fit text-cerebralOrange-600">
                <p>{feature.actionButtonText}</p>
                <img
                  src={arrowSvg}
                  alt="right arrow"
                  className="h-6 ml-2 group-hover:translate-x-2 duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
