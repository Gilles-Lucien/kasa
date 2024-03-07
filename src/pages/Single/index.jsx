import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carousel";
import Logements from "../../datas/logements.json";
import InformationsSingle from "../../components/InformationsSingle";
import Collapse from "../../components/Collapse";
import "./Single.css";


const data = Logements;

function Single() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  // console.log("objet logement récupéré via useParams depuis Single", logement);

  return (
    <main>
      <Carrousel pictures={logement.pictures} />
      <InformationsSingle logement={logement} />
      <Collapse data={logement.description} />
      <Collapse data={logement.equipments} />
    </main>
  );
}

export default Single;
