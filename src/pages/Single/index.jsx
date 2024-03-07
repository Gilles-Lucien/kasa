import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carousel";
import Logements from "../../datas/logements.json";
import InformationsSingle from "../../components/InformationsSingle";
import Collapse from "../../components/Collapse";
import fetchData from "../../services/callAPI.js";
import Error from "../Error";
import "./Single.css";

const data = Logements;

// vérifier que logements =/= undefined et s'il est undefined, composant d'erreur

function Single() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  // const [logement, setLogement] = useState({});

  // useEffect(() => {
  //   const result = fetchData();
  //   result.then((data) => {
  //     console.log(data);
  //   });
  // }, []);



  return (
    <main>
      <Carrousel pictures={logement.pictures} />
      <InformationsSingle logement={logement} />
      <div className="collapseContainer">
        <Collapse Description={logement.description} />
        <Collapse Équipements={logement.equipments} />
      </div>
    </main>
  );
}

export default Single;
