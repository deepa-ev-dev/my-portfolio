import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#50221d] text-white p-4 z-10">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Deepa E V</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
