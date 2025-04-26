import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./navBar";
import "./App.css";
import MainPage from "./MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex flex-col">
        <NavBar />
        <MainPage />
      </div>
    </>
  );
}

export default App;
