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
        <div className="max-w-screen-xl mx-auto">
          <h2
            className="text-3xl font-bold md:mb-6 py-5 text-center md:text-start"
            key={category}
          >
            {category}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4  justify-center gap-5">
            {serviceData
              .filter((service) => service.category === category)
              .map((service) => (
                <div
                  key={service.id}
                  className={`flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg  ${
                    cart.some((item) => item.id === service.id)
                      ? "bg-gray-300 opacity-45"
                      : "bg-gray-500"
                  }`}
                > 
                  <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: "scale(1.5)", opacity: 0.1 }}
                  >
                    <rect
                      x="159.52"
                      y="175"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 159.52 175)"
                      fill="white"
                    />
                    <rect
                      y="107.48"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 0 107.48)"
                      fill="white"
                    />
                  </svg>

                  <div className="relative px-6 pt-6 flex items-center justify-center">
                    <div
                      className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{
                        background: "radial-gradient(black, transparent 60%)",
                        transform:
                          "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                        opacity: 0.2,
                      }}
                    ></div>
                    <img
                      className="relative w-64 rounded-md"
                      src={service.img}
                      alt="Plant"
                    />
                  </div>
                  <div>
                    <a href="#">
                      <h5 className="text-xl text-center text-white mt-5 tracking-tight font-medium">
                        {service.title}
                      </h5>
                    </a>
                  </div>

                  <div className="relative text-white px-6 pb-6 mt-6">
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleBookService(service)}
                        className={`flex items-center justify-center px-2 py-1 text-sm text-white transition  rounded-md ${
                          cart.some((item) => item.id === service.id)
                            ? "bg-gray-800 cursor-not-allowed"
                            : " bg-[#41B3A2] hover:bg-gray-700"
                        } `}
                      >
                        {cart.some((item) => item.id === service.id)
                          ? "Service Booked"
                          : "Book Service"}
                      </button>
                      <button
                        onClick={handleViewDetails}
                        className="flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md ml-4 md:ml-0"
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

      {cart.length > 0 ? (
        <button
          onClick={handleYourService}
          type="button"
          class="absolute md:fixed left-[49%] top-[100px]   md:top-[55%] md:left-[86%] inline-flex items-center px-5 py-5 text-xl font-medium text-center text-white bg-[#41B3A2]  rounded-lg hover:bg-blue-800 focus:outline-none"
        >
          <span class="sr-only">Notifications</span>
          Your Service
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cart.length}
          </div>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Service;
