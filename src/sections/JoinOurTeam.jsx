import React from "react";
import joinOurTeamImg from "../assets/svg/progressiveCareer.svg";

const JoinOurTeam = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* image  */}
      <div className="h-full w-full flex-1">
        <img
          src={joinOurTeamImg}
          alt="woman holding a coffee cup"
          className="object-cover h-full w-full"
        />
      </div>
      {/* writeup */}
      <div className="bg-cerebralOrange-500 flex items-center text-white py-16 lg;py-0 flex-1">
        <div className="w-10/12 md:w-8/12 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
            Our craft lets you get your ideas across.
          </h1>
          <button className="text-cerebralOrange-600 bg-white rounded-full px-5 py-3">
            See Job Vacancies
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
