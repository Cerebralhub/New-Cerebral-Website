import React from "react";
import PositiveStory from "../sections/PositiveStory";
import ImageWithParallelText from "../components/ImageWithParallelText";
import aboutHeroImage from "../assets/webp/aboutHeroImage.webp";
import aboutImg2 from "../assets/svg/aboutImg2.svg";
import staff1 from "../assets/webp/staff/Group 2074.webp";
import staff2 from "../assets/webp/staff/Group 2075.webp";
import staff3 from "../assets/webp/staff/Group 2076.webp";
import staff4 from "../assets/webp/staff/Group 2077.webp";

const AboutUs = () => {
  const staffImages = [staff1, staff2, staff3, staff4];
  const heroContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        We are a hub for fresh and workable ideas, transforming these ideas into
        impactful solutions that matter.
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        Because your ideas matter, we won&apos;t let them go to waste!
      </p>
      <button className="text-white bg-cerebralOrange-600 rounded-full px-5 py-3">
        Work With Us
      </button>
    </>
  );

  const sec2Content = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        We are here to work with you in every step of the journey
      </h1>
    </>
  );

  return (
    <div>
      {/* hero section */}
      <ImageWithParallelText content={heroContent} imageSrc={aboutHeroImage} />
      {/* our work speaks for us */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* parallel texts */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col lg:flex-row justify-between lg:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-0 text-cerebralGrey-600 lg:w-1/2">
            Our Works Speak For Us
          </h2>
          <p className="text-sm sm:text-base text-cerebralGrey-500 lg:w-1/2">
            We create meaningful content, advise on and incubate public policy
            as well as simplify information. Our team of professionals is always
            on the ground to help interpret and express your idea.
          </p>
        </div>
        {/* grid statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600">30+</p>
            <p className="text-cerebralGrey-500 font-bold">
              Local and International Clients served (Please put logos of the
              following - NPA, FCCPC, NERC, Simmon Cooper, etc
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600">8+</p>
            <p className="text-cerebralGrey-500 font-bold">
              Registrations and Certifications
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600">40+</p>
            <p className="text-cerebralGrey-500 font-bold">
              Creatives in various fields
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600"> 105+ </p>
            <p className="text-cerebralGrey-500 font-bold">
              Creative customized content/solutions
            </p>
          </div>
        </div>
      </div>
      {/* we are here tow rok with you */}
      <ImageWithParallelText content={sec2Content} imageSrc={aboutImg2} />
      {/* our work speaks for us */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* parallel texts */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
            Teamwork is the only <br className="hidden md:block" /> way we work
          </h2>
          <p className="text-sm sm:text-base text-cerebralGrey-500 lg:w-1/2">
            We create meaningful content, advise on and incubate public policy
            as well as simplify information. Our team of professionals is always
            on the ground to help interpret and express your idea.
          </p>
        </div>
        {/* grid images */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {staffImages.map((image, index) => {
            return <img src={image} alt="" />;
          })}
        </div>
      </div>
      {/* positive story */}
      <PositiveStory />
    </div>
  );
};

export default AboutUs;
