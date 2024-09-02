import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceForm = ({ cart, price, selectedhour }) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    area: "",
    city: "",
    state: "",
    postCode: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateForm = (data) => {
      const errors = {};
      if (!data.name.trim()) {
        errors.name = "User full name required";
      }
      if (!data.phone) {
        errors.phone = "User phone required";
      }
      if (!data.email) {
        errors.email = "User email required";
      }
      if (!data.date) {
        errors.date = "User date required";
      }
      if (!data.area) {
        errors.area = "User area required";
      }
      if (!data.state) {
        errors.state = "User state required";
      }
      if (!data.city) {
        errors.city = "User city required";
      }
      if (!data.postCode) {
        errors.postCode = "User postCode required";
      }
      // console.log(errors)
      return errors;
    };

    const newError = validateForm(formState);
    setErrors(newError);
    if ((Object.keys(newError).length == 0) & (cart.length > 0)) {
      navigate("/review-booking", {
        state: { cart, price, selectedhour, formData: formState },
      });
    }else{
      return "Booked at least one service"
    }   

  };

  return (
    <div className="md:p-12 p-4  bg-gray-100 pb-12">
      <h1 className="text-3xl font-bold text-center mb-10">Your Information</h1>
      <div className="mx-auto w-full max-w-[550px] bg-white p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formState.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="text-red-600 text-xs mt-1">{errors.name}</span>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formState.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-600 text-xs mt-1">{errors.phone}</span>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formState.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-600 text-xs mt-1">{errors.email}</span>
            )}
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formState.date}
                  onChange={handleChange}
                />
                {errors.date && (
                  <span className="text-red-600 text-xs mt-1">
                    {errors.date}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="area"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Area
            </label>
            <input
              type="text"
              name="area"
              id="area"
              placeholder="Enter your area"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formState.area}
              onChange={handleChange}
            />
            {errors.area && (
              <span className="text-red-600 text-xs mt-1">{errors.area}</span>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="city"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formState.city}
              onChange={handleChange}
            />
            {errors.city && (
              <span className="text-red-600 text-xs mt-1">{errors.city}</span>
            )}
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="state"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  State/Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter your state"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formState.state}
                  onChange={handleChange}
                />
                {errors.state && (
                  <span className="text-red-600 text-xs mt-1">
                    {errors.state}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="postCode"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  name="postCode"
                  id="postCode"
                  placeholder="Enter your post code"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formState.postCode}
                  onChange={handleChange}
                />
                {errors.postCode && (
                  <span className="text-red-600 text-xs mt-1">
                    {errors.postCode}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="hover:shadow-form w-full rounded-md bg-[#41B3A2] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Book Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
