import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
import PageNot from "./pages/PageNot";
import Service from './pages/Service';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/*" element={<PageNot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
