import { useState, useEffect } from "react";
import { Footer, Navbar, Body } from "./components";
import Homepage from "./components/homepage/Homepage";
import useFetch from "./components/homepage/useFetch";
import movies from "../movies.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [detail, setDetails] = useState(movies);

  return (
    <div className="bg-[#f3f8ff] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/actors" element={<Body details={detail} />} />
        <Route path="/actors/:id" element={<Body details={detail} />} />
        <Route
          path="/actors/movies/:id"
          element={<div>actors/movies/:id</div>}
        />
        <Route path="/actors/photos" element={<div>actors/photos</div>} />
        <Route
          path="/actors/photos/:id"
          element={<div>actors/photos/:id</div>}
        />
        <Route path="/controversy" element={<h1>controversy</h1>} />
        <Route path="/controversy/:id" element={<div>controvery/:id</div>} />
        <Route path="/news" element={""} />
        <Route path="/news/:id" element={""} />
        <Route
          path="*"
          element={
            <div> 404 page not found you can back later may arrived here</div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
