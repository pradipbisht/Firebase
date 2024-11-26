import React from "react";
import Style from "./pages/Style";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Style />
      </BrowserRouter>
    </div>
  );
}

export default App;
