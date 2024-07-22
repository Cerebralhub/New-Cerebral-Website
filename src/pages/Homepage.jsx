import React from "react";
import HeroSection from "../sections/HeroSection";
import {WhatWeDo} from "../sections/WhatWeDo";
import {HowWeStandOut} from "../sections/HowWeStandOut";
import CreativeJumpstart from "../sections/CreativeJumpstart";

const Homepage = () => {
  return (
    <div>
      <div>
        {/* hero section */}
        <HeroSection />
        {/* What we do */}
        <WhatWeDo />
        {/* Building Software Solution */}
        <HowWeStandOut />
        {/* creating jumpstart */}
        <CreativeJumpstart />
      </div>
    </div>
  );
};

export default Homepage;
