import React, { useState } from "react";
import img from "./assets/image.png";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  function ToggleEvent() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  // console.log(typeof img2); // outputs as string?

  return (
    <div className="md:{flex-1  flex flex-col} sm:flex flex-col">
      <h1 className=" flex justify-center text-4xl text-gray-900 font-bold font-sans">
        {" "}
        Text2HandWriting
      </h1>
      {/* container div */}
      <div className=" w-full h-full grid grid-cols-2 ">
        {/* img div
         */}
        <div className="w-full h-full flex items-center justify-center">
          <img src={img} alt="" className="w-max h-max" />
        </div>
        {/* hand-Writing */}
        <div className="p-2 flex flex-col">
          <h1 className="mt-25 text-4xl">HandWriting</h1>
          <h2 className="mt-10">Select a HandWriting</h2>
          <div className="w-max bg-gray-500 rounded-md  p-1 ">
            <input
              type="text"
              placeholder="Select a HandWriting"
              onChange={() => ToggleEvent()}
              className="border-none outline-none"
            />
            <button className="inline h-full px-2 border-gray-900"> dp</button>
          </div>
          {isOpen && (
            <div className="origin-bottom-left bg-gray-300 rounded-lg mt-1 p-1 ">
              {" "}
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
          <h2 className="mt-10">Page</h2>
          <div className="w-max bg-gray-500 rounded-md  p-1 ">
            <input
              type="text"
              placeholder="Select a Page"
              onChange={() => ToggleEvent()}
              className="border-none outline-none"
            />
            <button className="inline h-full px-2 border-gray-900"> dp</button>
          </div>
          {isOpen && (
            <div className="origin-bottom-left bg-gray-300 rounded-lg mt-1 p-1 ">
              {" "}
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
          <div>
            <input
              type="text"
              className="w-100 h-50 bg-gray-400 "
              placeholder="Enter Text"
            />

            <div className="p-2 ">
              <button className=" p-2 rounded-lg bg-gray-500">
                Download Image
              </button>
            </div>
            <div className="pl-2 ">
              <button className="flex  justify-center p-2 rounded-lg bg-gray-500 ">
                Generate Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
