import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-400 p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Katakiu Initiative</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`${isOpen ? "block" : "hidden"} md:flex md:space-x-6`}>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#impact" className="hover:text-blue-300">Impact</a></li>
          <li><a href="#team" className="hover:text-blue-300">Team</a></li>
          <li><a href="#get-involved" className="hover:text-blue-300">Get Involved</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;