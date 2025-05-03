import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-500 to-gray-700 w-full h-screen text-white"
    >
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-3xl md:text-4xl">
        Welcome to Our Store
      </h2>
      <p className="mt-2 max-w-2xl text-lg sm:text-lg md:text-xl lg:text-xl text-center">
        Discover the best products at unbeatable prices.
      </p>
      <a
        href="#order"
        className="bg-white hover:bg-gray-100 shadow mt-3 px-5 py-2.5 rounded font-semibold text-gray-600 transition"
      >
        Order Now
      </a>
    </div>
  );
};

export default Hero;
