import React from "react";
import hereoImage from "../assets/svg/heroImage.svg";

const Homepage = () => {
  return (
    <div>
      <div>
        {/* hero section */}
        <div className="bg-[#DCEEFD]">
          <div className="max-w-7xl mx-auto flex">
            {/* hero writeup */}
            <div className="mt-32">
              <div>
                <h1 className="text-[#1D3444] text-7xl mb-5 font-semibold">
                  Everything Begins With an Idea
                </h1>

                <p className="text-[#000000] font-semibold">
                  Ideas Won't Keep. Something Must Be Done About Them
                </p>
                {/* buttons */}
                <div className="mt-12 flex space-x-9">
                  <button className="bg-[#DC141C] text-white font-medium px-7 py-3 rounded-full">
                    What We Do
                  </button>
                  <button className="bg-[#F58A07] text-white font-medium px-7 py-3 rounded-full">
                    How We Do
                  </button>
                </div>
              </div>
              <div></div>
            </div>
            {/* hero image */}
            <div className="w-2/3 relative">
              <div className="z-40 bg-[#ED9B18] opacity-50 text-[#ED9B18] w-40 h-[21.125rem] rounded-t-3xl absolute bottom-0 left-20">
                .
              </div>

              <div className="z-0 bg-[#F58A07] opacity-75 text-[#F58A07] w-40 h-60 rounded-tr-3xl absolute bottom-0 right-0">
                .
              </div>

              <div className="z-30 relative">
                <img src={hereoImage} alt="A man smiling" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
