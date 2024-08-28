import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useService } from "./Context/CartContext";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleGetStarted = () => {
    // navigate("/ServiceForm");
    navigate("/login");
  };
  // const { cart } = useService();

  return (
    <div>
      <nav className="w-full md:w-full lg:w-full fixed  top-0  z-50 lg:container md:pb-2  mx-auto bg-gray-100 shadow-sm">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 sm:pt-8">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/public/images/manpower.svg" className="h-8" alt="logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div class="flex items-center gap-10 justify-center">
              <button
                type="button"
                className="hidden md:block text-white bg-[#41B3A2] hover:bg-blue-500 font-medium rounded-3xl text-sm px-5 py-2.5 text-center "
                onClick={handleGetStarted}
              >
                Login
              </button>
            </div>

            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isSidebarOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-[#1A1A1A] font-extrabold"
                      : "block py-2 px-3 md:p-0 text-gray-500"
                  }
                  // href="#"
                  to={"/"}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-[#1A1A1A] font-extrabold"
                      : "block py-2 px-3 md:p-0 text-gray-500"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/service"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-[#1A1A1A] font-extrabold"
                      : "block py-2 px-3 md:p-0 text-gray-500"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  href="#"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-[#1A1A1A] font-extrabold"
                      : "block py-2 px-3 md:p-0 text-gray-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white shadow-lg"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <img src="/images/Manpower.svg" className="w-[60%]" alt="" />

          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li onClick={toggleSidebar}>
            <Link to={"/"} className="block py-2 px-4 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to={"/about"} className="block py-2 px-4 hover:bg-gray-700">
              About
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to={"/service"} className="block py-2 px-4 hover:bg-gray-700">
              Services
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to={"/contact"} className="block py-2 px-4 hover:bg-gray-700">
              Contact
            </Link>
          </li>
          <div  onClick={toggleSidebar}>
          <button
          //  onClick={toggleSidebar}
            onClick={handleGetStarted}
            type="button"
            className="text-white bg-[#41B3A2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          </div>
          
        </ul>
      </motion.div>

      {/* Overlay to close sidebar when clicked outside */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black opacity-50"
        />
      )}
    </div>
  );
};

export default Header;
