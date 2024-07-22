import React from "react";
import {ContactForm} from "../components/ContactForm";

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto my-24  px-6 md:px-0 grid grid-cols-2 space-x-10">
      {/* contact form  */}
      <div>
        <h2 className="text-4xl font-semibold mb-4 text-cerebralGrey-600">
          Have a question ? Let's <br /> get in touch with you.
        </h2>
        <p className="text-cerebralGrey-500 mb-12">
          Fill up the Form and our team will get back to within 24 hrs
        </p>
        <ContactForm />
      </div>
      {/* address and location */}
      <div>
        <div className="grid grid-cols-2">
          {/* location  */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg text-cerebralGrey-700">
              Location
            </h3>
            <p className="text-cerebralGrey-500">
              47, Oba Yekini Street, Ikate Elegushi,Lekki, Lagos.
            </p>
            <p className="text-cerebralGrey-500">
              35, Julius Nyerere Crescent, Asokoro District, Abuja.
            </p>
          </div>
          {/* contact us */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg text-cerebralGrey-700">
              Contact Us
            </h3>
            <div>
              {" "}
              <p className="text-cerebralGrey-500">+234 704 000 6622</p>
              <p className="text-cerebralGrey-500">info@cerebralhub.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
