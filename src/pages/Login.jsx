import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-100 font-[sans-serif] h-[50%] md:min-h-screen p-4 md: md:pt-40 md:pb-20 pt-28 pb-10">
        <div className="grid justify-center max-w-md mx-auto">
          <div>
            <img
              src="./images/worker.avif"
              className="w-full object-cover rounded-2xl"
              alt="login-image"
            />
          </div>

          <form className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
            <div className="mb-12">
              <h3 className="text-3xl font-extrabold text-blue-600">Sign Up</h3>
            </div>

            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  name="text"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter email or phone"
                />
                <img
                  src="./public/images/phone-call.png"
                  alt="phone"
                  className="w-5 right-2 absolute"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  className="text-gray-800 ml-3 block text-sm"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Forgot Phone?
                </a>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="button"
                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign Up
              </button>
             
            </div>

            <div class="my-4 flex items-center gap-4">
              <hr class="w-full border-gray-300" />
              <p class="text-sm text-gray-800 text-center">or</p>
              <hr class="w-full border-gray-300" />
            </div>

            <button
              type="button"
              class="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                class="inline"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login