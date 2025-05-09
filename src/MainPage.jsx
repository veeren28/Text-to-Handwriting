import React, { useState } from "react";
import i1 from "./pages/page1.jpg";
import i2 from "./pages/page2.jpg";
// const MainPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   function ToggleEvent() {
//     setIsOpen(!isOpen);
//     console.log(isOpen);
//   }
//   // console.log(typeof img2); // outputs as string?

//   return (
//     <div className="flex-1  flex flex-col">
//       <h1 className=" flex justify-center text-4xl text-gray-900 font-bold font-sans">
//         {" "}
//         Text2HandWriting
//       </h1>
//       {/* container div */}
//       <div className=" w-full h-full grid grid-cols-2 ">
//         {/* img div
//          */}
//         <div className="w-full h-full flex items-center justify-center">
//           <img src={img} alt="" className="w-max h-max" />
//         </div>
//         {/* hand-Writing */}
//         <div className="p-2 flex flex-col">
//           <h1 className="mt-25 text-4xl">HandWriting</h1>
//           <h2 className="mt-10">Select a HandWriting</h2>
//           <div className="w-max bg-gray-500 rounded-md  p-1 ">
//             <input
//               type="text"
//               placeholder="Select a HandWriting"
//               className="border-none outline-none"
//             />
//             <button
//               className="inline h-full px-2 border-gray-900"
//               onClick={() => ToggleEvent()}
//             >
//               {" "}
//               dp
//             </button>
//           </div>
//           {isOpen && (
//             <div className="origin-bottom-left bg-gray-300 rounded-lg mt-1 p-1 ">
//               {" "}
//               <ul>
//                 <li className="hover:bg-gray-400 hover:rounded-md p-2 cursor-pointer border-b-2 border-gray-300">
//                   Option 1
//                 </li>
//                 <li className="hover:bg-gray-400 hover:rounded-md p-2 cursor-pointer border-b-2 border-gray-300">
//                   Option 2
//                 </li>
//                 <li>Option 3</li>
//               </ul>
//             </div>
//           )}
//           <h2 className="mt-10">Page</h2>
//           <div className="w-max bg-gray-500 rounded-md  p-1 ">
//             <input
//               type="text"
//               placeholder="Select a Page"
//               onChange={() => ToggleEvent()}
//               className="border-none outline-none"
//             />
//             <button className="inline h-full px-2 border-gray-900"> dp</button>
//           </div>
//           {isOpen && (
//             <div className="origin-bottom-left bg-gray-300 rounded-lg mt-1 p-1 ">
//               {" "}
//               <ul>
//                 <li>Option 1</li>
//                 <li>Option 2</li>
//                 <li>Option 3</li>
//               </ul>
//             </div>
//           )}
//           <div>
//             <input
//               type="text"
//               className="w-100 h-50 bg-gray-400 "
//               placeholder="Enter Text"
//             />

//             <div className="p-2 ">
//               <button className=" p-2 rounded-lg bg-gray-500">
//                 Download Image
//               </button>
//             </div>
//             <div className="pl-2 ">
//               <button className="flex  justify-center p-2 rounded-lg bg-gray-500 ">
//                 Generate Image
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
const MainPage = () => {
  const [text, setText] = useState("");
  const [handW, setHandW] = useState("Handwriting1");
  const [img, setImg] = useState("page1");
  const [preImg, setPreImg] = useState(i1);
  const PreviewImg = (e) => {
    const selected = e.target.value;
    setImg(selected);
    if (selected == "page1") setPreImg(i1);
    else if (selected == "page2") setPreImg(i2);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = FormData();
    formData.append("text", text);
    formData.append("handW", handW);
    formData.append("img", img);
    try {
      const response = await fetch("", { method: "POST", body: formData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1 flex-col  justify-center items-center">
      <h1 className="text-3xl font-bold">Text2HandWriting</h1>
      <div className="flex flex-1 flex-row justify-center ">
        {" "}
        <div className="flex-1 flex justify-center items-start">
          <img src={preImg} alt="" className="max-w-sm rounded shadow" />
        </div>
        <div className="flex flex-col justify-center">
          <form action="" onSubmit={HandleSubmit} className="">
            <label className=""> Enter Text</label>
            <textarea
              className="w-full h-25 p-1 max-w-md space-y-4 bg-white  rounded-lg shadow-md"
              onChange={(e) => setText(e.target.value)}
              value={text}
              name="text"
              required
            ></textarea>
          </form>
          <div>
            <label className="block mb-1 font-semi-bold">
              {" "}
              Select a Font Style
            </label>
            <select
              className="bg-gray-300 rounded-md p-2 shadow-md outline-0"
              value={handW}
              onChange={(e) => setHandW(e.target.value)}
            >
              <option value="Handwriting1">HandWriting 1</option>
              <option value="Handwriting2">HandWriting 2</option>
            </select>
          </div>
          <div>
            <label> Select a Page</label>
            <br />
            <select
              className="bg-gray-300 rounded-md p-2 shadow-md outline-0"
              onChange={PreviewImg}
            >
              <option value="page1">Page 1</option>
              <option value="page2">Page 2</option>
            </select>
          </div>{" "}
          <button
            type="submit"
            className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 cursor-pointer"
          >
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
