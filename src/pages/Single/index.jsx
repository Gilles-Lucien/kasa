import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carousel";
import Logements from "../../datas/logements.json";
import Stars from "../../components/Stars";
import "./Single.css";

const data = Logements;

function Single() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  console.log("objet logement récupéré via useParams depuis Single", logement);

  return (
    <main>
      <Carrousel pictures={logement.pictures} />
      <div className="singleInfoContainer">
        <div className="singleInfoContainer__left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <div key={index} className="tags__tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="singleInfoContainer__right">
          <div>
            <div className="singleInfoContainer__right__host">
              <p>
                {logement.host.name.split(" ")[0]}
                <br />
                {logement.host.name.split(" ")[1]}
              </p>
              <img
                className="profilPic"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
            <Stars rating={logement.rating} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Single;
