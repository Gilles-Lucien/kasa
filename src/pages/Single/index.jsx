import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carousel";
import Logements from "../../datas/logements.json";

const data = Logements;


function Single() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  console.log('objet logement récupéré via useParams depuis Single', logement);

  return (
    <main>
      <h1>Single {id}</h1>
      <Carrousel pictures={logement.pictures}/>
    </main>
  );
}

export default Single;
