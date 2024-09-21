import React, { useEffect } from "react";

const OtherCard = () => {
  const cardData = [
    {
      img: "/images/gas.webp",
      alt: "Gas Service Image",
      title: "Gas Stove Service",
    },
    {
      img: "/images/paint.webp",
      alt: "Painting Service Image",
      title: "Painting Services",
    },
    {
      img: "/images/plambing.webp",
      alt: "Plumbing Service Image",
      title: "Plumbing Service",
    },
    {
      img: "/images/homecleaning.webp",
      alt: "Home Cleaning Image",
      title: "Home Cleaning Service",
    },
  ];

  return (
    <div className="py-10">
      <div className="header">
        <h1 className="text-center my-12 text-3xl font-bold">
          Our Specializations
        </h1>
      </div>

      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="bg-white pt-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-[300px] duration-300 flex flex-col overflow-hidden"
            >
              <img
                src={data.img}
                alt={data.alt}
                className="rounded-t-lg w-full h-40 hover:scale-110 transition-all ease-linear duration-1000"
              />
              <div className="p-4 py-5 flex-grow">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {data.title}
                </h3>
                <p className="text-slate-600 italic">
                  Experience the simple pleasures of a world with no cars, and
                  only gentle walks through palm tree forests, and fallen
                  coconuts.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex pt-5 justify-center items-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-slate-500 rounded-full"></span>
          <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
          <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
          <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default OtherCard;
