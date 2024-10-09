import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(50);

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-6">
          {/* text content section */}
          <div className="text-white text-center">
            <p
              data-aos="fade-up"
              className="tracking-wide text-sm font-light opacity-80"
            >
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-extrabold text-4xl leading-tight"
            >
              Search Your Destination
            </p>
          </div>

          {/* form section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-6 bg-white rounded-lg p-6 shadow-xl relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
              {/* Destination input */}
              <div>
                <label htmlFor="destination" className="text-gray-500 font-medium">
                  Search Your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 mt-2 rounded-full p-3 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                />
              </div>

              {/* Date input */}
              <div>
                <label htmlFor="date" className="text-gray-500 font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full mt-2 bg-gray-100 rounded-full p-3 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                />
              </div>

              {/* Price range slider */}
              <div>
                <label htmlFor="price" className="text-gray-500 font-medium block">
                  <div className="flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl text-gray-800">$ {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 mt-2 flex items-center">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Search button */}
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 hover:shadow-lg px-6 py-3 rounded-full duration-300 absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
