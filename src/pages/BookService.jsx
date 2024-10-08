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
    if (selectedService) {
      setPrice(price * hour);
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
                        <p className="mt-1 text-xs text-gray-700">
                          {item.category}
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                          <img
                            className="w-12 h-12 bg-blue-600 rounded-full"
                            src="/images/workerProfile.png"
                            alt=""
                          />
                          <div className="font-medium dark:text-white">
                            <div>Jese Leos</div>
                          </div>
                        </div>
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
            className="absolute md:fixed left-[49%] bottom-[472px]  md:top-[55%] md:left-[86%] inline-flex items-center px-5 py-5 text-xl font-medium text-center text-white bg-[#41B3A2]  rounded-lg hover:bg-blue-800 focus:outline-none"
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

      <div className="bg-gradient-to-b from-blue-50 via-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto py-10 flex gap-4">
          <div className="bg-white shadow-xl  w-[20%] p-5 rounded-lg border-t-4 border-blue-500 relative overflow-hidden">
            <div className="flex justify-center mb-4 relative">
              <div className="absolute top-1 right-0 left-[135px] bg-blue-500 w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold">
                worker
              </div>
              <img
                className="w-[100px] rounded-full border-2 border-blue-500 shadow-md"
                src="./images/workerProfile.png"
                alt="worker profile image"
              />
            </div>
            <h2 className="text-center mt-3 text-lg font-semibold text-gray-800">
              Mr.Hasem
            </h2>
            <div>
              <p className="text-center py-2 font-medium">Service List</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-center text-sm text-gray-500 border-r border-gray-400">
                <p>Home Service</p>
                <p>Office Cleaning</p>
                <p>Clothe Cleaning</p>
              </div>
              <div className="text-center text-sm text-gray-500">
                <p>Home Cleaning</p>
                <p>Home Cleaning</p>
                <p>Home Cleaning</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl  w-[20%] p-5 rounded-lg border-t-4 border-blue-500 relative overflow-hidden">
            <div className="flex justify-center mb-4 relative">
              <div className="absolute top-1 right-0 left-[135px] bg-blue-500 w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold">
                worker
              </div>
              <img
                className="w-[100px] rounded-full border-2 border-blue-500 shadow-md"
                src="./images/workerProfile.png"
                alt="worker profile image"
              />
            </div>
            <h2 className="text-center mt-3 text-lg font-semibold text-gray-800">
              Mr.Hasem
            </h2>
            <div>
              <p className="text-center py-2 font-medium">Service List</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-center text-sm text-gray-500 border-r border-gray-400">
                <p>Home Service</p>
                <p>Office Cleaning</p>
                <p>Clothe Cleaning</p>
              </div>
              <div className="text-center text-sm text-gray-500">
                <p>Home Cleaning</p>
                <p>Home Cleaning</p>
                <p>Home Cleaning</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl  w-[20%] p-5 rounded-lg border-t-4 border-blue-500 relative overflow-hidden">
            <div className="flex justify-center mb-4 relative">
              <div className="absolute top-1 right-0 left-[135px] bg-blue-500 w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold">
                worker
              </div>
              <img
                className="w-[100px] rounded-full border-2 border-blue-500 shadow-md"
                src="./images/workerProfile.png"
                alt="worker profile image"
              />
            </div>
            <h2 className="text-center mt-3 text-lg font-semibold text-gray-800">
              Mr.Hasem
            </h2>
            <div>
              <p className="text-center py-2 font-medium">Service List</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-center text-sm text-gray-500 border-r border-gray-400">
                <p>Home Service</p>
                <p>Office Cleaning</p>
                <p>Clothe Cleaning</p>
              </div>
              <div className="text-center text-sm text-gray-500">
                <p>Home Cleaning</p>
                <p>Home Cleaning</p>
                <p>Home Cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[250px] h-[254px] p-[5px] rounded-xl overflow-visible bg-gradient-to-r from-[#74ebd5] to-[#acb6e5] z-10">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2"></div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2"></div>

        <div className="relative w-full h-full bg-[#292b2c] flex justify-center items-center rounded-lg z-20">
          <div className="relative px-6 pt-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-md"></div>
            <img
              className="relative w-64 rounded-md transform transition-transform duration-500 hover:scale-105"
              // src={service.img}
              src="./public/Home/appliance.jpg"
              alt="Service"
            />
          </div>

          <div className="text-center">
            <a href="#">
              <h5 className="text-xl text-white mt-5 font-medium tracking-tight transition-colors duration-500 hover:text-[#41B3A2]">
              Home cleanig
              </h5>
            </a>
          </div>
        </div>
      </div>

      {cart.length > 0 && (
        <ServiceForm selectedhour={selectedhour} price={price} cart={cart} />
      )}
    </div>
  );
};

export default BookService;

// selectedhour={selectedhour} price={price}
