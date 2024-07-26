import React from "react";
import ImageWithParallelText from "../components/ImageWithParallelText";

const PositiveStory = () => {
  const content = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        There&apos;s always a positive story to tell when you work with us.
      </h1>
      <p className="text-cerebralGrey-500 mb-10 text-sm sm:text-base">
        We leave our clients supercharged and ready-to-go after every job, and
        they are excited to tell their story.
      </p>
      <div className="flex items-center  space-x-8">
        <div>
          <img src="/src/assets/svg/positiveStoryPFP.svg" alt="" />
        </div>
        <div>
          <p className="text-cerebralBlue-700 font-medium text-base sm:text-lg">
            Chikelu Neo
          </p>
          <p className="text-cerebralOrange-600 font-medium text-sm sm:text-base">
            CEO at MotoAI
          </p>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <ImageWithParallelText
        imageSrc="/src/assets/svg/positiveStoryImg.svg"
        content={content}
      />
    </div>
  );
};

export default PositiveStory;
