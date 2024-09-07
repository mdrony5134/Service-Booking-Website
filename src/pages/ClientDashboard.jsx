import React, { useState } from "react";
import { BsBagCheck } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import ClientProfile from "../components/ClientProfile";
import MyOrder from "../components/MyOrder";
import { IoSettings } from "react-icons/io5";
import { motion } from "framer-motion";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-8 md:py-24 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        <motion.nav
        //   initial={{ x: "-100%" }}
        //   animate={{ x: menuOpen ? 0 : "-100%" }}
        //   transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`flex flex-col mt-32 md:pt-0 bg-gray-500 w-full md:w-64 h-auto md:h-screen px-4 text-gray-900 border border-gray-500 shadow-md rounded-md md:mt-[100px] ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex items-center flex-col justify-center mt-8">
            <img
              src="./images/pro_client.jpg"
              className="mx-auto w-20 h-20 rounded-full"
              alt="Client"
            />
            <span className="font-semibold text-xl text-white mt-2">
              Jones Mith
            </span>
          </div>

          <div className="mt-10 mb-4">
            <ul className="ml-4">
              <li
                className="mb-2 px-4 py-4 text-gray-100 flex items-center border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded-lg cursor-pointer"
                onClick={() => {
                  setActiveTab("profile");
                  setMenuOpen(false);
                }}
              >
                <FaUserCircle />
                <span className="ml-2">Profile</span>
              </li>
              <li
                className="mb-2 px-4 py-4 text-gray-100 flex items-center border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded-lg cursor-pointer"
                onClick={() => {
                  setActiveTab("order");
                  setMenuOpen(false);
                }}
              >
                <BsBagCheck />
                <span className="ml-2">My Order</span>
              </li>
            </ul>
          </div>
        </motion.nav>

        <button
          className="md:hidden mt-20 fixed bg-[#41B3A2]  text-white px-4 py-2 rounded-md  mx-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoSettings className="animate-spin"  /> : <IoSettings className="animate-spin" />}
        </button>

      
        <div className="flex-1">
          {activeTab === "profile" && <ClientProfile />}
          {activeTab === "order" && <MyOrder />}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
