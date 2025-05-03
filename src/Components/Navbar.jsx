import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [ispen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!ispen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };
  return (
    <header className="z-10 fixed flex justify-between items-center bg-white shadow-md px-4 w-full h-15">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10" /> */}
        <h1 className="font-bold text-gray-700 text-2xl">DropNest</h1>
      </div>
      <nav className="hidden md:flex gap-4 text-gray-700">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("product")}>Products</button>
        <button onClick={() => scrollToSection("order")}>Order</button>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {ispen ? (
            <FaTimes size={20} className="text-gray-700" />
          ) : (
            <FaBars size={20} className="text-gray-700" />
          )}
        </button>
      </div>
      {ispen && (
        <nav className="md:hidden top-15 right-0 absolute flex flex-col gap-4 bg-white shadow-lg p-4 w-full text-gray-700">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("product")}>Products</button>
          <button onClick={() => scrollToSection("order")}>Order</button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
