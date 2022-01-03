import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter";
import Navbar from "./components/navbar";
import Students from "./components/students";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="students" element={<Students />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
