import React from 'react'

const PaymentFaild = () => {
  return (
    <div>
         <div className="lg:pb-52 lg:pt-52 pb-24 pt-32 px-4">
        <div className="bg-gray-100 shadow-md rounded-md md:w-1/2 lg:w-1/2 p-6  md:mx-auto">
         <div className='flex justify-center mb-4'>
         <img className='w-20 h-20' src="./images/cross-circle.svg" alt="" />
         </div>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-red-500 font-semibold text-center">
              Payment Faild!
            </h3>
            <p className="text-gray-600 my-2">
             Try again later.
            </p>
            <div className="py-10 text-center">
              <a
                href="#"
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentFaild