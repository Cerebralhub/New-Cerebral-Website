import React from "react";
import HeroSection from "../sections/HeroSection";
import {WhatWeDo} from "../sections/WhatWeDo";
import {HowWeStandOut} from "../sections/HowWeStandOut";
import CreativeJumpstart from "../sections/CreativeJumpstart";
import OurCraft from "../sections/OurCraft";
import JoinOurTeam from "../sections/JoinOurTeam";
import PositiveStory from "../sections/PositiveStory";

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
        {/* our craft */}
        <OurCraft />
        {/* joint out team */}
        <JoinOurTeam />
        {/* positive story */}
        <PositiveStory />
      </div>
    </div>
  );
};

export default Homepage;
