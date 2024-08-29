import React from "react";
import { useLocation } from "react-router-dom";
import serviceData from "../Data/Data";

const CategoryService = () => {
  const location = useLocation();
  const { category } = location.state;

  const filteredServices = serviceData.filter(
    (service) => service.category === category
  );

  return (
    <div className="lg:container mx-auto mt-6 md:pt-32 pb-12 md:pb-0 pt-40">
      <h1 className="text-center text-4xl mb-6">{category}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 max-w-screen-xl mx-auto">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative md:mb-16 md:mt-8 flex w-full max-w-[250px] flex-col overflow-hidden border border-gray-100 shadow-md rounded-md bg-white"
          >
            <a className="relative flex h-40 overflow-hidden" href="#">
              <img
                className="absolute top-4 right-8 w-3/4 rounded-md"
                src={service.img}
                alt="product image"
              />
            </a>
            <div className="mt-2 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl mb-4 tracking-tight text-slate-900">
                  {service.title}
                </h5>
              </a>
              <div className="flex md:justify-between">
                <button className="flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md">
                  Book Service
                </button>
                <button className="flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md ml-4 md:ml-0">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryService;
