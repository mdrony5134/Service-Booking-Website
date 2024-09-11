import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { IconType } from "react-icons";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = (category) => {
    setOpen(false);
    setIsActive(false);
    navigate(`/categoryservice`, { state: { category } });
  };

  return (
    <div className="flex items-center justify-center ">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2"
        >
          <span
            className={`text-sm  md:p-0 font-extrabold ${
              isActive
                ? "block py-2 px-3 md:p-0 text-[#1A1A1A] font-extrabold"
                : "block py-2 px-3 md:p-0 text-gray-500"
            }`}
          >
            Category
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2  rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option handleOptionClick={handleOptionClick} text="Home Cleaning" />
          <Option handleOptionClick={handleOptionClick} text="Ac Service" />
          {/* <Option handleOptionClick={handleOptionClick} text="Home Cleaning" /> */}
          {/* <Option handleOptionClick={handleOptionClick} text="Ac Service" />
          <Option handleOptionClick={handleOptionClick} text="Home Cleaning" />
          <Option handleOptionClick={handleOptionClick} text="Ac Service" />
          <Option handleOptionClick={handleOptionClick} text="Home Cleaning" />
          <Option handleOptionClick={handleOptionClick} text="Ac Service" />
          <Option handleOptionClick={handleOptionClick} text="Home Cleaning" />
          <Option handleOptionClick={handleOptionClick} text="Ac Service" /> */}
          <Option
            handleOptionClick={handleOptionClick}
            text="Shifting Service" 
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, handleOptionClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => handleOptionClick(text)}
      className="flex items-center gap-2 w-full px-3 py-1 border-b-2 text-lg font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}></motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
