import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import Context from "./Context";

export default function App() {
  const endpoint = "/fotos.json";

  const [picture, setPicture] = useState([]);
  const sharePicture = { picture, setPicture };

  const getPicture = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();

    let pictures = data.photos.map((e) => ({
      id: e.id,
      img: e.src.original,
      alt: e.alt,
      liked: e.liked,
    }));
    setPicture([...pictures]);

    console.log(pictures);
  };

  useEffect(() => {
    console.log("aqui");
    getPicture();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={sharePicture}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
