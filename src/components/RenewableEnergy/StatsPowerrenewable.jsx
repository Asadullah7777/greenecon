import React from "react";
import img1 from "../../../src/images/agro.jpg";
import img2 from "../../../src/images/6.jpg";
import img3 from "../../../src/images/plantation.jpg";
import img5 from "../../../src/images/background.jpg";
const StatsPowerrenewable = () => {
  return (
    <div className="relative container-fluid py-12  bg-[#f7f5f2] dark:bg-gray-800 py-26  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
          <div className="ml-auto lg:col-start-2 ">
            <h2 className="mt-2 text-4xl font-bold leading-7 font-montserrat tracking-normal text-[#3c3c3c] dark:text-white sm:text-3xl sm:leading-9">
              The Power of Renewables
            </h2>
            <p className="mt-4 text-lg leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-gray-300">
              The Power of Renewables We have to make the banner the same way
              it's made on this page, it should keep changing this way.
            </p>

            <div>
              <h6 className="mt-6 text-2xl font-bold font-montserrat leading-7 tracking-normal text-[#316D69]">
                Here’s the content.
              </h6>

              <ul className="gap-6   ">
                <li className="mt-4 ">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                      Solar energy employed the most of any renewable energy
                      source; 316,675 people at the end of 2020.
                    </span>
                  </div>
                </li>
                <li className="mt-2 ">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                      About 30% of the world's electricity comes from
                      renewables, including solar, wind, hydropower, and among
                      others.
                    </span>
                  </div>
                </li>
                <li className="mt-2 ">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                      About 79% of the nation's energy comes from fossil fuels,
                      and 12.5% from renewable sources.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* <div>
                <h6 className="mt-6 text-2xl font-bold font-montserrat leading-7 tracking-normal text-[#316D69]">
                  Blue Carbon
                </h6>

                <ul className="gap-6  ">
                  <li className="mt-4 ">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                        Mangroves and coastal wetlands annually sequester carbon
                        at a rate ten times greater than mature tropical forests.
                      </span>
                    </div>
                  </li>
                  <li className="mt-2 ">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                        Though seagrass covers 0.1% of the world's seafloor, but
                        stores 11% of ocean’s buried carbon.
                      </span>
                    </div>
                  </li>
                </ul>
              </div> */}

            {/* <div>
                <h6 className="mt-6 text-2xl font-bold font-montserrat leading-7 tracking-normal text-[#316D69]">
                  Climate Smart Agriculture
                </h6>

                <ul className="gap-6   ">
                  <li className="mt-4 ">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                        In 2018, emissions from agriculture, and associated land
                        use comprised 17% of the global greenhouse gas emissions.
                        Smart agriculture can reduce these emissions to a
                        significant amount.
                      </span>
                    </div>
                  </li>
                  <li className="mt-2 ">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                        According to WEF, smart agricultural practices have the
                        potential to increase crop yields by 300 metric million
                        tonnes by 2030, while saving $100 billion for farmers in
                        reduced costs.
                      </span>
                    </div>
                  </li>
                </ul>
              </div> */}
          </div>
          <div className="relative mt-10  relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={img2}
                  alt="2"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={img1}
                  alt="1"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={img3}
                  alt="3"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={img5}
                  alt="2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPowerrenewable;
