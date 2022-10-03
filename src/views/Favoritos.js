
import "../assets/css/galeria.css";

import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {

  const { picture, setPicture } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {picture.filter((pic) => pic.liked === true)
        .map((pic) => (
          <div className="foto">
            <img src={pic.img} alt={pic.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
