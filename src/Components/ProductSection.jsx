import React from "react";
import Green from "../assets/image/mint.jpg";
import Pink from "../assets/image/pink.jpg";
import Blue from "../assets/image/blue.jpg";
import Gray from "../assets/image/gray.jpg";

import Bottles from "../assets/image/Bottles.jpg";

const ProductSection = () => {
  return (
    <div id="product" className="px-4 md:px-20 py-16">
      <h2 className="mb-2 font-bold text-gray-700 text-3xl text-center">
        Our Products
      </h2>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4">
        <div className="bg-white p-4 rounded-lg w-full">
          <img
            src={Bottles}
            alt="Products"
            className="rounded-t-lg w-full object-contain"
          />
        </div>
        <div className="bg-white p-4">
          <h1 className="font-bold text-gray-600 text-xl sm:text-2xl lg:text-3xl md:text-4xl text-start">
            Silicone Folding Bottle
          </h1>
          <p className="mt-2 w-full text-gray-600 text-sm md:text-sm sm:text-base lg:text-lg text-justify">
            Stay hydrated on-the-go with our durable and eco-friendly silicone
            folding bottle! This innovative design allows you to easily collapse
            the bottle when it's not in use, saving space in your bag or
            backpack. Made from high-quality, BPA-free silicone, it's perfect
            for travel, sports, and outdoor adventures. With a leak-proof lid
            and easy-to-clean design, this bottle is your ultimate companion for
            hydration, wherever life takes you!
          </p>
        </div>
      </div>
      <div className="bg-white mt-8 p-4 rounded-lg w-full">
        <h1 className="font-bold text-gray-600 text-lg sm:text-lg md:text-xl lg:text-2xl text-center">
          Available In Different Colors
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8">
        <div>
          <img
            src={Gray}
            alt="Products"
            className="rounded-lg w-full object-contain"
          />
        </div>
        <div>
          <img
            src={Green}
            alt="Products"
            className="rounded-lg w-full object-contain"
          />
        </div>
        <div>
          <img
            src={Pink}
            alt="Products"
            className="rounded-lg w-full object-contain"
          />
        </div>
        <div>
          <img
            src={Blue}
            alt="Products"
            className="rounded-lg w-full object-contain"
          />
        </div>
        </div>

      </div>
    </div>
  );
};

export default ProductSection;
