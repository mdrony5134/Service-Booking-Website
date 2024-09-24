import React, { useEffect, useState, useRef } from "react";

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
      img: "/images/plambing.webp",
      alt: "Plumbing Service Image",
      title: "Plumbing Service",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(4);
  const infiniteData = [...cardData];
  infiniteData.push(...cardData.slice(0, itemsToShow));
  // console.log(infiniteData)
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isTransitioning, setIsTansitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState("23.7%");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]); 

  const handleNext = () => {
    if (sliderRef.current) {
      setIsTansitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (currentIndex === cardData.length) {
      setTimeout(() => {
        setIsTansitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex, cardData.length]);


  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      // console.log(width)
      if (width < 640) {
        setItemsToShow(1);
        setCardWidth("94.8%")
      } else if (width < 1024) {
        setItemsToShow(2);
        setCardWidth("47.4%")
      } else {
        setItemsToShow(4);
        setCardWidth("23.7%")
      }
    };

    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [setItemsToShow]);

  // console.log(itemsToShow)

  return (
    <div className="py-10">
      <div className="header">
        <h1 className="text-center my-12 text-3xl font-bold">
          Our Specializations
        </h1>
      </div>

      <div className="w-[90%] mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className={`relative flex gap-5 ${
            isTransitioning ? "transition-transform duration-1000" : ""
          }`}
          style={{
            transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
          }}
        >
         

          {infiniteData.map((data, index) => (
            <div key={index} style={{ minWidth: cardWidth }}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                <img
                  src={data.img}
                  alt={data.alt}
                  className="rounded-t-lg w-full h-40 object-cover hover:scale-110 transition-all ease-linear duration-500"
                />
                <div className="p-4 flex-grow">
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
            </div>
          ))}
        </div>

        <div className="flex pt-5 justify-center items-center mt-8 space-x-5">
          <span
            className={`w-3 h-3 ${
              currentIndex % itemsToShow === 0 ? "bg-slate-500" : "bg-slate-300"
            } rounded-full`}
          ></span>
          <span
            className={`w-3 h-3 ${
              currentIndex % itemsToShow === 1 ? "bg-slate-500" : "bg-slate-300"
            } rounded-full`}
          ></span>
          <span
            className={`w-3 h-3 ${
              currentIndex % itemsToShow === 2 ? "bg-slate-500" : "bg-slate-300"
            } rounded-full`}
          ></span>
          <span
            className={`w-3 h-3 ${
              currentIndex % itemsToShow === 3 ? "bg-slate-500" : "bg-slate-300"
            } rounded-full`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default OtherCard;
