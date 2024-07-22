import React from "react";
import {InputField} from "./InputField";

export const ContactForm = () => {
  return (
    <form className=" flex flex-col space-y-5">
      <InputField type="text" placeholder="First Name" />
      <InputField type="text" placeholder="Last Name" />
      <InputField type="email" placeholder="Email Address" />
      <textarea
        name=""
        id=""
        placeholder="Message"
        className="bg-gray-100 rounded-xl h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-cerebralOrange-600 text-white rounded-full py-2 px-5 cursor-pointer text-sm w-fit"
      />
    </form>
  );
};
