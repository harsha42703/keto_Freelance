import React, { useState } from "react";
import Sidebar from "./Sidebar";

function DisplayData() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [data, setData] = useState([
    {
      productName: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
      manufacturer: "Apple",
      modelNumber: "A1297",
      releaseDate: "2023-08-01",
      warranty: "1 Year",
      stockStatus: "In Stock",
    },
    // Add more data as needed
  ]);

  return (
    <section className="w-full bg-cyan-100 rounded-bl-2xl rounded-tl-2xl h-auto sm:h-[100vh] md:h-[100vh] lg:h-[100vh] flex items-center justify-center flex-col md:ml-2 rounded-tr-2xl lg:ml-2 sm:ml-2 overflow-x-hidden">
      <div className="h-screen w-[100vw] flex flex-col">
        <div className="h-[20vh] w-[0vw]"></div>
        <div className="flex w-full h-[80vh] pb-[3rem]">
          <div className="left mx-20 w-[20vw]">
            <Sidebar />
          </div>
          <div className="right w-[80vw] bg-cyan-50 rounded-2xl p-4 mx-[50px] overflow-hidden">
            <div className="flex justify-between items-center w-full min-w-[900px]">
              <div>
                <a className="" href="https://www.google.com">
                  <button
                    type="button"
                    className="text-white bg-cyan-800 hover:bg-cyan-600 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Upload Students
                  </button>
                </a>
              </div>
              <div className="flex justify-center items-center relative">
                <form className="flex items-center max-w-lg mx-auto mr-[0.5rem]">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5"
                      placeholder="Search"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    ></button>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-cyan-900 rounded-full hover:bg-cyan-600 "
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </form>

                <button
                  onClick={toggleDropdown}
                  className="text-white mr-[0.5rem] bg-cyan-900 hover:bg-cyan-600 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  Edit Student{" "}
                </button>
              </div>
            </div>
            <div className="relative h-full pb-[3rem]">
              <div className="overflow-x-auto overflow-y-auto h-full custom-scrollbar">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Manufacturer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Model Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Release Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Warranty
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Stock Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {item.productName}
                        </th>
                        <td className="px-6 py-4">{item.color}</td>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="px-6 py-4">{item.manufacturer}</td>
                        <td className="px-6 py-4">{item.modelNumber}</td>
                        <td className="px-6 py-4">{item.releaseDate}</td>
                        <td className="px-6 py-4">{item.warranty}</td>
                        <td className="px-6 py-4">{item.stockStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplayData;
