import React, { useState, useEffect, useRef } from "react";

const AllService = () => {
  const cardData = [
    {
      img: "/images/gas.webp",
      alt: "image",
      title: "Gas Stove Service",
    },
    {
      img: "/images/paint.webp",
      alt: "image",
      title: "Painting Services",
    },
    {
      img: "/images/plambing.webp",
      alt: "image",
      title: "Plumbing Service",
    },
    {
      img: "/images/homecleaning.webp",
      alt: "image",
      title: "Home Cleaning Service",
    },
    {
      img: "/images/homeshifting.webp",
      alt: "image",
      title: "Home Shifting Service",
    },
    {
      img: "/images/homecleaning.webp",
      alt: "image",
      title: "Home Cleaning Service",
    },
    {
      img: "/images/homeshifting.webp",
      alt: "image",
      title: "Home Shifting Service",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(4);
  const infiniteData = [...cardData, ...cardData.slice(0, itemsToShow)];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isTransitioning, setIsTansitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState("23.7%")

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

  const handlePrev = () => {
    if (sliderRef.current) {
      setIsTansitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? infiniteData.length - 1 : prevIndex - 1
      );
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
        setCardWidth("94.8%");
      } else if (width < 1024) {
        setItemsToShow(2);
        setCardWidth("47.4%");
      } else {
        setItemsToShow(4);
        setCardWidth("23.7%");
      }
    };

    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [setItemsToShow]);

  return (
    <>
      <div className="header">
        <h1 className="text-center mb-10 -mt-32 text-3xl font-bold">
          For Your Home
        </h1>
      </div>

      <div className="relative w-[90%] py-5 mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className={`relative flex gap-5 ${
            isTransitioning ? "transition-transform duration-700" : ""
          }`}
          style={{
            transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
          }}
        >
          {infiniteData.map((data, index) => (
            <div key={index} style={{minWidth: cardWidth}}>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <figure>
                  <img
                    src={data.img}
                    alt={data.alt}
                    className="aspect-video w-full h-48 hover:scale-110 transition-all ease-linear duration-500"
                  />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      {data.title}
                    </h3>
                  </header>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full mt-8 items-center justify-center gap-2 p-4">
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            onClick={handlePrev}
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            onClick={handleNext}
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllService;
