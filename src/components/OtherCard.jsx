import React, { useEffect, useState } from "react";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCard, setVisibleCard] = useState(4)

  useEffect(() => {
    if(cardData.length <= visibleCard){
      console.log("first")
      setVisibleCard(4)
      setCurrentIndex(0)
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      setVisibleCard((prevIndex) => (prevIndex + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [cardData.length, cardData.length === visibleCard]);

  // const visibleCards = 4;
  const cardSlides = cardData.slice(currentIndex, visibleCard);
  console.log(currentIndex, visibleCard)

  return (
    <div className="py-10">
      <div className="header">
        <h1 className="text-center my-12 text-3xl font-bold">
          Our Specializations
        </h1>
      </div>

      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardSlides.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col pt-5"
            >
              <img
                src={data.img}
                alt={data.alt}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {data.title}
                </h3>
                <p className="text-slate-600">
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
