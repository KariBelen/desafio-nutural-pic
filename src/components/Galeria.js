import "../assets/css/galeria.css";
import Heart from "./Heart";

import Context from "../Context";
import { useContext } from "react";

export default function Home() {
  const { picture, setPicture } = useContext(Context);

  const addLike = (id) => {
    const index = picture.findIndex((pic) => pic.id === id);
    picture[index].liked = picture[index].liked === false ? true : false;
    setPicture([...picture]);
  }
  
  return (
    <div className="galeria grid-columns-5 p-3">
      {picture.map((pic) => (
        <div
          className="foto"
          onClick={() => addLike(pic.id)}
        >
          <Heart filled={pic.liked} />
          <img src={pic.img} alt={pic.alt} />
            <p>{pic.alt}</p>
        </div>
      ))}
    </div>
  );
}
