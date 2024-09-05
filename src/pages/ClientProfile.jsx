import React, { useState } from "react";
import CreateClientProfile from "../components/CreateClientProfile";

const ClientProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState({
    profileImage: "",
    userName: "",
    phone: "",
    area: "",
    address: "",
    description: "",
  });
  const handleProfileEdit = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveProfile = (upadateData) => {
    setProfileData(upadateData);
    setShowModal(false);
  };
  return (
    <div>
      <section className="pt-28 md:pt-40 md:pb-20 pb-10 bg-gray-200">
        <div className=" text-center pb-10">
          <h1 className="text-center text-3xl font-bold inline-block border-b-2 border-emerald-600">
            Client Profile
          </h1>
        </div>
        <div className="w-full lg:w-[70%]   md:w-1/2 px-4 mx-auto">
          <div className=" flex flex-col min-w-0 break-words bg-[#41B3A2] w-full mb-6 shadow-xl rounded-lg mt-16 md:h-[550px] text-white">
            <div className="px-6">
              <div className="flex flex-wrap justify-start">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    {profileData.profileImage ? (
                      <img
                        src={profileData.profileImage}
                        className="shadow-xl rounded-full h-auto  align-middle bg-blue-600 border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src="./images/pro_client.jpg"
                        className="shadow-xl rounded-full h-auto  align-middle bg-blue-600 border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="m-5">
                  <button
                    onClick={handleProfileEdit}
                    className="relative md:left-[900px] left-48 flex p-2.5 bg-emerald-600 rounded-xl hover:rounded-3xl hover:bg-[#41B3A2] transition-all duration-300 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-start   md:mt-28 mt-12 ">
                  {profileData.userName && profileData.description ? (
                    <div className="w-[700px]">
                    <h1 className="text-center text-3xl font-bold ml-32">{profileData.userName}</h1>
                  <p class="w-fit text-white py-8 italic  text-md">
                    {profileData.description}
                </p>
                  </div>
                    
                  ) : (
                    <div className="w-[700px]">
                    <h1 className="text-center text-gray-600 text-3xl font-bold ml-32">Jones Mith</h1>
                  <p class="w-fit text-gray-600 py-8 italic  text-md">Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem
                veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore
                </p>
                  </div>
                  )}
                 
                  {/* here */}
                  {
                    profileData.userName && profileData.area && profileData.address ? (
                      <div class="w-full md:w-[650px] my-auto py-6 flex flex-col justify-center gap-2">
                    <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                      <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                          <div class="flex flex-col pb-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                              Full Name
                            </dt>
                            <dd class="text-lg font-semibold text-white">{profileData.userName}</dd>
                          </div>
                          <div class="flex flex-col py-3 ">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400 ">
                             Area
                            </dt>
                            <dd class="text-lg font-semibold border-b border-gray-200 text-white pb-2">{profileData.area}</dd>
                          </div>
                         
                         
                        </dl>
                      </div>
                      <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                              Phone Number
                            </dt>
                            <dd class="text-lg font-semibold text-gray-600">+251913****30</dd>
                          </div>

                          <div class="flex flex-col pt-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                             Address
                            </dt>
                            <dd class="text-lg font-semibold border-b border-gray-200 text-white pb-2">{profileData.address}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                    ):(
                      <div class="w-full md:w-[650px] my-auto py-6 flex flex-col justify-center gap-2">
                    <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                      <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                          <div class="flex flex-col pb-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                              Full Name
                            </dt>
                            <dd class="text-lg font-semibold text-gray-600">Jhons mith</dd>
                          </div>
                          <div class="flex flex-col py-3 ">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400 ">
                             Area
                            </dt>
                            <dd class="text-lg font-semibold border-b border-gray-200 text-gray-600 pb-2">Abera</dd>
                          </div>
                         
                         
                        </dl>
                      </div>
                      <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                              Phone Number
                            </dt>
                            <dd class="text-lg font-semibold text-gray-600">+251913****30</dd>
                          </div>

                          <div class="flex flex-col pt-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                             Address
                            </dt>
                            <dd class="text-lg font-semibold border-b border-gray-200 text-gray-600 pb-2">user address</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                    )
                  }
                  {/* <div class="w-full md:w-[650px] my-auto py-6 flex flex-col justify-center gap-2">
                    <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                      <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                          <div class="flex flex-col pb-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                              Full Name
                            </dt>
                            <dd class="text-lg font-semibold text-gray-600">Jhons mith</dd>
                          </div>
                          <div class="flex flex-col py-3 ">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400 ">
                             Area
                            </dt>
                            <dd class="text-lg font-semibold border-b border-gray-200 text-gray-600 pb-2">Abera</dd>
                          </div>
                         
                         
                        </dl>
                      </div>
                      <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                              Phone Number
                            </dt>
                            <dd class="text-lg font-semibold text-gray-600">+251913****30</dd>
                          </div>

                          <div class="flex flex-col pt-3">
                            <dt class="py-2 text-white md:text-lg dark:text-gray-400">
                             Address
                            </dt>
                            <dd class="text-lg font-semibold border-b border-gray-200 text-gray-600 pb-2">user address</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div> */}
                  {/* here */}

                  {/* <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Phone :{" "}
                      <span className="text-xl font-normal">017XXXXXXXX</span>
                    </h3>
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Area :{" "}
                      <span className="text-xl font-normal">
                        {profileData.area}
                      </span>
                    </h3>
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Address :{" "}
                      <span className="text-xl font-normal">
                        {profileData.address}
                      </span>
                    </h3>
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      Description :{" "}
                      <span className="text-xl font-normal">
                        {profileData.description}
                      </span>
                    </h3>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <CreateClientProfile
          handleCloseModal={handleCloseModal}
          initialData={profileData}
          handleSaveProfile={handleSaveProfile}
        />
      )}
    </div>
  );
};

export default ClientProfile;
