import React from "react";
import workerData from "../Data/workerData";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useService } from "../components/Context/CartContext";

const WorkerList = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useService();
  const workerCategory = [
    ...new Set(workerData.map((worker) => worker.category)),
  ];

  const handleWorkerSelect = (worker) => {
    toast.success(`${worker.title} Selected successfully !`, {
      position: "top-right",
    });
  };
  const handleViewProfile = () => {
    navigate("/workerProfile");
  };
  const handleYourService = () =>{
    navigate("/bookService")
  }
  return (
    <div className="py-40 bg-gray-100">
      <div>
        <h1 className="text-center font-bold text-3xl">All Service Worker</h1>
      </div>
      {workerCategory.map((category) => (
        <div className="max-w-screen-xl  mx-auto">
          <h2
            className="text-3xl font-bold md:mb-6 py-5 text-center md:text-start"
            key={category}
          >
            {category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {workerData
              .filter((worker) => worker.category === category)
              .map((worker) => (
                <div className="overflow-hidden  rounded bg-white text-center text-slate-500 max-w-[350px] shadow-md shadow-slate-200">
                  <figure className="p-6 pb-0">
                    <span className="relative inline-flex  w-60 items-center justify-center rounded-full text-white">
                      <img
                        src={worker.img}
                        alt="user name"
                        title="user name"
                        width="300"
                        height="300"
                        className="max-w-full rounded-md"
                      />
                    </span>
                  </figure>

                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-700">
                        {worker.title}
                      </h3>
                      <p className=" text-slate-400">{worker.category}</p>
                    </header>
                  </div>

                  <div className="flex justify-end gap-2 p-6 pt-0">
                    <button
                      onClick={() => handleWorkerSelect(worker)}
                      className={`inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none `}
                    >
                      <span className="order-2">Select Worker</span>
                    </button>
                    <button
                      onClick={handleViewProfile}
                      className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
                      <span className="order-2">View Profile</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <ToastContainer />
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

export default WorkerList;
