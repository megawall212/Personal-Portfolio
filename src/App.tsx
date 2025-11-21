import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Home from "./sections/Home";
import "./App.css";



const App: React.FC = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Home />
    </div>
  );
};

export default App;
