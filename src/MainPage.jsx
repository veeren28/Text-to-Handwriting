import React, { useState } from "react";

const MainPage = () => {
  const [text, setText] = useState("");
  const [handW, setHandW] = useState("Handwriting1");
  const [img, setImg] = useState("page1");
  const [preImg, setPreImg] = useState("/page1.jpg");

  const previewImage = (e) => {
    const selected = e.target.value;
    setImg(selected);
    if (selected === "page1") setPreImg("/page1.jpg");
    else if (selected === "page2") setPreImg("/page2.jpg");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", text);
    formData.append("handW", handW);
    formData.append("img", img);

    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "handwriting.pdf";
      link.click();
    } else {
      alert("Error generating PDF");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Text2HandWriting</h1>

      <div className="flex flex-row space-x-8">
        {/* Preview Image */}
        <div className="flex-1 flex justify-center items-start">
          <img src={preImg} alt="preview" className="max-w-sm rounded shadow" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label>Enter Text</label>
          <textarea
            className="p-2 bg-white rounded shadow"
            rows="8"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label>Select Font Style</label>
          <select
            className="bg-gray-200 rounded p-2"
            value={handW}
            onChange={(e) => setHandW(e.target.value)}
          >
            <option value="Handwriting1">Handwriting 1</option>
            <option value="Handwriting2">Handwriting 2</option>
          </select>

          <label>Select Page</label>
          <select
            className="bg-gray-200 rounded p-2"
            value={img}
            onChange={previewImage}
          >
            <option value="page1">Page 1</option>
            <option value="page2">Page 2</option>
          </select>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate PDF
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
