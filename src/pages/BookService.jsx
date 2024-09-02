import React, { useState } from "react";
import ServiceForm from "./ServiceForm";
import { useService } from "../components/Context/CartContext";

const BookService = () => {
  const [selectedhour, setSelectedHour] = useState(null);
  const [price, setPrice] = useState(null);
  // const [serviceDetails, setServiceDetails] = useState();

  const { cart, dispatch } = useService();

  const handleRemoveService = (item) => {
    dispatch({ type: "REMOVE_SERVICE", payload: item });
  };
  const handChangeHour = (e, id) => {
    const hour = e.target.value;
    const price = 259.0;  
    // console.log(id)
    // setServiceDetails((prevDetails) => ({
    //   ...prevDetails,
    //   [id]: {
    //     hour: hour,
    //     price: hour * price,
    //   },
    // }));

    const selectedService = cart.find((service) => service.id === id);
    // console.log(selectedService)
    
    if (selectedService) {
      setSelectedHour(hour);
    }
    if(selectedService){
      setPrice(price * hour)
    }
    // console.log(unique);

    // console.log(hour);

    // setPrice(hour * 259);
  };
  // console.log(price);

  return (
    <div>
      <div className="h-[90%] bg-gray-100 md:pt-32 pt-40 pb-3">
        <h1 className="mb-10 text-center text-2xl font-bold pt-10">
          Your Services
        </h1>

        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <div className="mx-auto max-w-5xl md:justify-center  px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3 w-full">
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item.img}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div>
                          <select
                            name="hour"
                            id="hour"
                            onChange={(e) => handChangeHour(e, item.id)}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            <option value="">Select Your Hour</option>
                            <option value="3">3 hours</option>
                            <option value="6">6 hours</option>
                            <option value="9">9 hours</option>
                            <option value="12">12 hours</option>
                            {/* <option value="24">1 day</option>
                            <option value="48">2 day</option>
                            <option value="72">3 day</option>
                            <option value="96">4 day</option>
                            <option value="120">5 day</option>
                            <option value="144">6 day</option>
                            <option value="7">1 week</option>
                            <option value="14">2 week</option>
                            <option value="21">3 week</option>
                            <option value="28">4 week</option>
                            <option value="30">1 month</option>
                            <option value="60">2 month</option>
                            <option value="90">3 month</option>
                            <option value="120">4 month</option>
                            <option value="150">5 month</option>
                            <option value="180">6 month</option>
                            <option value="210">7 month</option>
                            <option value="240">8 month</option>
                            <option value="270">9 month</option>
                            <option value="300">10 month</option>
                            <option value="330">11 month</option>
                            <option value="360">1 year</option> */}
                          </select>
                          <div className="flex md:flex-none flex-col">
                          <p className="text-sm mb-4 pt-3 font-bold price">
                            {price ? price : 259.0} TK
                          </p>
                          <button
                            onClick={() => handleRemoveService(item)}
                            type="button"
                            className="md:block text-white bg-[#41B3A2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            Remove Service
                          </button>
                        </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-center text-5xl font-bold text-red-700 pb-16">
              Empty
            </h1>
          </div>
        )}

        {cart.length > 0 ? (
          <button
            type="button"
             class="absolute md:fixed left-[49%] bottom-[472px]  md:top-[55%] md:left-[86%] inline-flex items-center px-5 py-5 text-xl font-medium text-center text-white bg-[#41B3A2]  rounded-lg hover:bg-blue-800 focus:outline-none"
          >
            <span className="sr-only">Notifications</span>
            Your Service
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
              {cart.length}
            </div>
          </button>
        ) : (
          ""
        )}
      </div>

      {cart.length > 0 && (
        <ServiceForm selectedhour={selectedhour} price={price} cart={cart} />
      )}
    </div>
  );
};

export default BookService;

// selectedhour={selectedhour} price={price}
