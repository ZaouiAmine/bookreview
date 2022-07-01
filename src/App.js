import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Styles from "./styles/App.module.css";

function App() {
  return (
    <div className={Styles.container}>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
