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
          <p className="text-gray-500 text-lg font-semibold uppercase">
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
            <p className="text-gray-500 text-lg font-semibold">
             Status:
            </p>
            <div className="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#059669"
                  d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-lg font-semibold">
             Payment Status:
            </p>
            <div className="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#059669"
                  d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0"
                />
              </svg>
            </div>
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
