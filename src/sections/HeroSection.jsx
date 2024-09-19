import React from "react";
import heroImage from "../assets/png/heroImage.png";

const HeroSection = () => {
  return (
    <div className="bg-[#DCEEFD]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 xl:py-0 8 sm:pt-12 md:pt-20 max-w-7xl">
        <div className="flex">
          {/* hero writeup */}
          <div className="md:mt-32 my-20 md:my-0">
            <div>
              <h1 className="text-cerebralGrey-600 text-6xl md:text-7xl mb-5 font-semibold">
                Everything Begins With an Idea
              </h1>

              <p className="text-[#000000] font-semibold">
                Ideas Won't Keep. Something Must Be Done About Them
              </p>
              {/* buttons */}
              <div className="mt-12 flex space-x-9">
                <button className="bg-cerebralRed text-white font-medium px-7 py-3 rounded-full">
                  What We Do
                </button>
                <button className="bg-cerebralOrange-600 text-white font-medium px-7 py-3 rounded-full">
                  How We Do
                </button>
              </div>
            </div>
            <div></div>
          </div>
          {/* hero image */}
          <div className="w-2/3 relative hidden xl:block">
            <div className="z-40 bg-cerebralOrange-500 opacity-50 text-cerebralOrange-500 w-40 h-[21.125rem] rounded-t-3xl absolute bottom-0 left-20">
              .
            </div>

            <div className="z-0 bg-cerebralOrange-600 opacity-75 text-cerebralOrange-600 w-40 h-60 rounded-tr-3xl absolute bottom-0 right-0">
              .
            </div>
            <div className="z-30 relative">
              <img src={heroImage} alt="A man smiling" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
