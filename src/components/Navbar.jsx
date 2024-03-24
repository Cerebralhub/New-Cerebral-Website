import React from "react";
import logo from "../assets/svg/Cerebral Logo.svg";

const Navbar = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-7">
        {/* logo */}
        <div>
          <img src={logo} alt="Cerebral Logo" />
        </div>
        {/* navbar */}
        <div>
          <nav>
            <ul className="flex space-x-16">
              <li>Home</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
