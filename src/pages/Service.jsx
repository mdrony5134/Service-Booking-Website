import React from "react";
import serviceData from "../Data/Data";
import { useService } from "../components/Context/CartContext";
import { useNavigate } from "react-router-dom";

const categories = [...new Set(serviceData.map((service) => service.category))];

const Service = () => {
  const { cart, dispatch } = useService();
  const navigate = useNavigate();

  const handleBookService = (service) => {
    dispatch({ type: "ADD_SERVICE", payload: service });
  };

  const handleYourService = () => {
    navigate("/workerList");
  };

  const handleViewDetails = () => {
    navigate("/serviceDetails");
  };

  return (
    <div className="lg:container bg-gray-100 mx-auto mt-6 md:pt-32 pb-12 md:pb-0 pt-40">
      <div>
        <h1 className="text-center text-4xl mb-6">All Services</h1>
      </div>

      {categories.map((category) => (
        <div className="max-w-screen-xl mx-auto" key={category}>
          <h2 className="text-3xl font-bold md:mb-6 py-5 text-center md:text-start">
            {category}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 pb-20">
            {serviceData
              .filter((service) => service.category === category)
              .map((service) => (
                <div
                  key={service.id}
                  className={`relative w-[280px]  p-[5px] rounded-xl overflow-visible bg-gradient-to-r from-[#74ebd5] to-[#acb6e5] z-10`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2"></div>

                  <div className="relative w-full h-full bg-[#292b2c] flex flex-col justify-between items-center rounded-lg z-20 p-4">
                    <div className="relative w-full flex justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-md"></div>
                      <img
                        className="relative w-64 rounded-md transform transition-transform duration-500 hover:scale-105"
                        src={service.img}
                        alt="Service"
                      />
                    </div>

                    <div className="text-center mt-2">
                      <a href="#">
                        <h5 className="text-xl py-2 text-white font-medium tracking-tight transition-colors duration-500 hover:text-[#41B3A2]">
                          {service.title}
                        </h5>
                      </a>
                    </div>

                    <div className="flex justify-between w-full mt-4 pb-2">
                      <button
                        onClick={() => handleBookService(service)}
                        className={`flex-1 mx-1 flex items-center justify-center px-2 py-1 text-sm text-white transition rounded-md shadow-lg ${
                          cart.some((item) => item.id === service.id)
                            ? "bg-gray-800 cursor-not-allowed"
                            : "bg-[#41B3A2] hover:bg-gray-700 shadow-lg hover:shadow-xl"
                        }`}
                      >
                        {cart.some((item) => item.id === service.id)
                          ? "Service Booked"
                          : "Book Service"}
                      </button>

                     
                      <button
                        onClick={handleViewDetails}
                        className="flex-1 mx-1 flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md shadow-lg hover:shadow-xl"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={handleYourService}
          type="button"
          className="absolute md:fixed left-[49%] top-[100px] md:top-[55%] md:left-[86%] inline-flex items-center px-5 py-5 text-xl font-medium text-center text-white bg-[#41B3A2] rounded-lg hover:bg-blue-800 focus:outline-none"
        >
          Your Service
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
            {cart.length}
          </div>
        </button>
      )}
    </div>
  );
};

export default Service;
