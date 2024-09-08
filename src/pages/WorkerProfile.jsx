import React, { useState } from "react";
import WorkerService from "../components/WorkerService";
import WorkerPaymentTable from "../components/WorkerPaymentTable";

const WorkerProfile = () => {
  const [workerServiceModal, setWorkerServiceModal] = useState(false);

  const handleService = (event) => {
    setWorkerServiceModal(event.target.value);
  };
  const handleCloseService = () => {
    setWorkerServiceModal(false);
  };
  return (
    <div>
      <section className="pt-28 md:pt-40 md:pb-20 pb-12  bg-gray-200">
        <div className=" text-center pb-10">
          <h1 className="text-center text-3xl font-bold inline-block border-b-2 border-emerald-600">
            Worker Profile
          </h1>
        </div>
        <div className="w-full lg:w-[40%] md:w-1/2 px-4 mx-auto">
          <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-start">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      src="./images/workerProfile.png"
                      className="shadow-xl rounded-full h-auto align-middle bg-blue-600 border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      alt=""
                    />
                    <div className="md:left-24 top-28 -left-24 absolute md:top-4">
                      <select
                        onChange={handleService}
                        value={workerServiceModal}
                        className=" text-white bg-[#41B3A2] font-medium rounded-md text-sm px-5 py-2.5 text-center mr-8 focus:outline-none"
                      >
                        <option value="">Select Service Info</option>
                        <option value="details">Service Details</option>
                        <option value="payment">Service Payment</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="text-start mt-44   md:mt-28">
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Name :{" "}
                    <span className="text-xl font-normal italic">Mr.Jasim</span>
                  </h3>
                  <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Phone :{" "}
                      <span className="text-xl font-normal italic">
                        017XXXXXXXX
                      </span>
                    </h3>
                  </div>
                  <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Service :
                    </h3>
                    <ul className="text-xl font-normal">
                      <li className="list-disc ml-10 italic mb-1">
                        Home Cleaning
                      </li>
                      <li className="list-disc ml-10 italic mb-1">
                        Home Combo Cleaning
                      </li>
                      <li className="list-disc ml-10 italic mb-1">Ac Combo</li>
                      <li className="list-disc ml-10 italic mb-1">Ac Doctor</li>
                      <li className="list-disc ml-10 italic mb-1">
                        Ac Servicing
                      </li>
                      <li className="list-disc ml-10 italic mb-1">
                        Commercial Shifting
                      </li>
                      <li className="list-disc ml-10 italic mb-1">
                        House Shifting
                      </li>
                      <li className="list-disc ml-10 italic mb-1">
                        Pickup Rental
                      </li>
                      <li className="list-disc ml-10 italic mb-1">Car Wash</li>
                    </ul>
                  </div>

                  <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Rating : <span className="text-xl font-normal"></span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        {workerServiceModal == "details" && (
          <WorkerService handleCloseService={handleCloseService} />
        )}
        {workerServiceModal == "payment" && (
          <WorkerPaymentTable handleCloseService={handleCloseService} />
        )}
      </div>
    </div>
  );
};

export default WorkerProfile;
