import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Service from "./pages/Service.jsx";
import BookUs from "./pages/BookUs.jsx";

import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*"element={<App />}>
      <Route index element={<Home />}/>
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Service" element={<Service />} />
      <Route path="BookUs" element={<BookUs />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
