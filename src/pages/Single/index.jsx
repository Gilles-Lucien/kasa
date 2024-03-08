import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carousel";
// import Logements from "../../datas/logements.json";
import InformationsSingle from "../../components/InformationsSingle";
import Collapse from "../../components/Collapse";
import fetchData from "../../services/callAPI.js";
import Error from "../Error";
import "./Single.css";

// const data = Logements;

// vérifier que logements =/= undefined et s'il est undefined, composant d'erreur

function Single() {
  const { id } = useParams();
  // const logement = data.find((item) => item.id === id);
  const [logement, setLogement] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let allLogements = [];

    async function get() {
      allLogements = await fetchData();
      try {
        setLogement(allLogements.find((element) => element.id === id));
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    get();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {logement ? (
        <main>
          <Carrousel pictures={logement?.pictures} />
          <InformationsSingle logement={logement} />
          <div className="collapseContainer">
            <Collapse Description={logement?.description} />
            <Collapse Équipements={logement?.equipments} />
          </div>
        </main>
      ) : (
        <Error></Error>
      )}
    </>
  );
}

export default Single;
