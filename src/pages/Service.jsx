import React from "react";
import serviceData from "../Data/Data";
import { useService } from "../components/Context/CartContext";
import { useNavigate } from "react-router-dom";


const categories = [...new Set(serviceData.map((service) => service.category))];

const Service = () => {
  const { cart, dispatch } = useService();
  const navigate = useNavigate();
  

  const handleBookService = (service) => {
    // if (!cart.some((item) => item.id === service.id)) {

    // } else {
    //   return "Service already booked";
    // }
    dispatch({ type: "ADD_SERVICE", payload: service });
  };
  const handleYourService = () => {
    navigate("/bookService");
  };
  return (
    <div className="lg:container mx-auto mt-6 md:pt-32 pb-12 md:pb-0 pt-40">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {serviceData
              .filter((service) => service.category === category)
              .map((service) => (
                <div
                   
                  key={service.id}
                  className={`group relative md:mb-12 md:mt-3 flex w-full max-w-[250px]  flex-col overflow-hidden border border-gray-100 shadow-md rounded-md ${
                    cart.some((item) => item.id === service.id)
                      ? "bg-gray-300 opacity-45"
                      : " bg-white "
                  }`}
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
                      <button
                        onClick={() => handleBookService(service)}
                        className={`flex items-center justify-center px-2 py-1 text-sm text-white transition  rounded-md ${
                          cart.some((item) => item.id === service.id)
                            ? "bg-gray-500 cursor-not-allowed"
                            : " bg-[#41B3A2] hover:bg-gray-700"
                        } `}
                      >
                        {cart.some((item) => item.id === service.id)
                          ? "Service Booked"
                          : "Book Service"}
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
