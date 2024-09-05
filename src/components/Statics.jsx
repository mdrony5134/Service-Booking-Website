import React, { useEffect, useState } from "react";

const Statics = () => {
  const [accuracy, setAccuracy] = useState(0);
  const [Payroll, setPayroll] = useState(0);
  const [processing, setProcessing] = useState(0);
  const [staffs, setStaff] = useState(0);

  const targets = [
    { setter: setAccuracy, count: 999 },
    { setter: setPayroll, count: 1465 },
    { setter: setProcessing, count: 20 },
    { setter: setStaff, count: 176 },
  ];


  const maxCount = Math.max(...targets.map((target) => target.count));
  // console.log(maxCount);

  const animateCountUp = (targetSetter, targetCount, duration) => {
    let currentCount = 0;
    let increment = Math.ceil(targetCount / (duration / 10));
    // console.log(increment)
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        clearInterval(interval);
        currentCount = targetCount;
      }
      targetSetter(currentCount)
    }, 10);
    // console.log(currentCount);
  };

  useEffect(() => {
    targets.forEach(target => {
      animateCountUp(target.setter, target.count, maxCount / 10);
    });
  },[]);


  return (
    <div>
      <div className="w-[90%] mx-auto h-[110px] bg-white relative rounded-md -top-[120px] shadow-custom z-10">
        <div class="bg-white flex flex-row dark:bg-gray-800 rounded-lg shadow-lg  md:grid grid-cols-4">
          <div class="flex flex-col md:p-6 p-2 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 border-r">
            <dt
              class="order-2 mt-2  font-medium leading-6 text-gray-500 dark:text-gray-400"
              id="item-1"
            >
              Accuracy Rate Chart
            </dt>
            <dd
              class="order-1 md:text-5xl text-xl  font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
              aria-describedby="item-1"
              id="starsCount"
            >
             
             {accuracy}
            </dd>
          </div>
          <div class="flex flex-col md:p-6 p-2 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
            <dt class="order-2 mt-2  font-medium leading-6 text-gray-500 dark:text-gray-400">
              Payroll Managed
            </dt>
            <dd
              class="order-1 md:text-5xl text-xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
              id="downloadsCount"
            >
             {Payroll}
            </dd>
          </div>
          <div class="flex flex-col md:p-6 p-2 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
            <dt class="order-2 mt-2  font-medium leading-6 text-gray-500 dark:text-gray-400">
              Processing Fee
            </dt>
            <dd
              class="order-1 md:text-5xl text-xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
              id="sponsorsCount"
            >
             {processing}
            </dd>
          </div>
          <div class="flex flex-col md:p-6 p-2 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
            <dt class="order-2 mt-2  font-medium leading-6 text-gray-500 dark:text-gray-400">
              Staff Last Year
            </dt>
            <dd
              class="order-1 md:text-5xl text-xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
              id="sponsorsCount"
            >
             {staffs}
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
