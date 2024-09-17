import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const BookingInfo = () => {
  return (
    <div>
      <section className="w-full px-6  pt-40 pb-20  max-w-7xl mx-auto">
        <div className="shadow-md px-10 pb-5 rounded-md bg-gray-100">
          <div className="flex justify-center items-center w-full gap-2 border-b py-8">
            <h1 className="font-bold text-3xl">Booking Info</h1>
          </div>

          <div className="my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div>
              <p className="text-gray-500 text-lg font-semibold">
                User Name:
              </p>
              <p className="font-semibold">Mr. Katabon</p>
            </div>
            <div>
              <p className="text-gray-500 text-lg font-semibold">
                Phone Number:
              </p>
              <p className="font-semibold">017*********</p>
            </div>
            <div>
              <p className="text-gray-500 text-lg font-semibold"> Address:</p>
              <p className="font-semibold">Dhaka, Mirpur-10, Kazipara</p>
            </div>
            <div>
              <p className="text-gray-500 text-lg font-semibold">Others:</p>
              <p className="font-semibold">Road no-8, House no-10/12</p>
            </div>
            <div>
              <p className="text-gray-500 text-lg font-semibold">Service Status:</p>
              <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-300 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  Confirmed
                </dd>
              </dl>
            </div>
            <div>
              <p className="text-gray-500 text-lg font-semibold">
                Payment Status:
              </p>
              <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-300 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  Paid
                </dd>
              </dl>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 py-4 border-b">
            <div>
              <p className="text-gray-500 text-lg font-semibold">
                Worker List:
              </p>
              <p className="font-semibold">
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1 mt-1">Mr.Hasem</li>
                </div>
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1">Mr.Hasem</li>
                </div>
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1">Mr.Hasem</li>
                </div>
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1">Mr.Hasem</li>
                </div>
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-lg font-semibold">
                Service List:
              </p>
              <p className="font-semibold">
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1 mt-1">Home Service</li>
                </div>
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1">Cleanig Service</li>
                </div>
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1">Shifting Service</li>
                </div>
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneOutline />
                  <li className="list-none mb-1">Pickup Rental Service</li>
                </div>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 py-4 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="border p-2 rounded-md ">
              <p className="text-gray-500 text-xs font-semibold">
                Total Service:
              </p>
              <p className="font-bold text-xl">9</p>
            </div>
            <div className="border p-2 rounded-md ">
              <p className="text-gray-500 text-xs font-semibold">
                Total Price:
              </p>
              <p className="font-bold text-xl">Tk 5000</p>
            </div>
            <div className="border p-2 rounded-md ">
              <p className="text-gray-500 text-xs font-semibold">
                Total Worker:
              </p>
              <p className="font-bold text-xl">52</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingInfo;
