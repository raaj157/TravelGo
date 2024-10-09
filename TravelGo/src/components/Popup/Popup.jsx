import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white rounded-xl w-[350px] p-6 shadow-xl relative">
            {/* Close button */}
            <div className="absolute top-3 right-3">
              <IoCloseOutline
                className="text-3xl text-gray-500 cursor-pointer hover:text-gray-800 transition duration-200"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Popup content */}
            <div className="text-center space-y-4">
              {/* Header */}
              <h1 className="text-2xl font-semibold text-gray-800">Book Your Trip</h1>

              {/* Input Fields */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              {/* Book Now Button */}
              <div className="pt-4">
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
