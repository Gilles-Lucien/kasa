import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carousel";
import InformationsSingle from "../../components/InformationsSingle";
import Collapse from "../../components/Collapse";
import fetchData from "../../services/callAPI.js";
import Error from "../Error";
import "./Single.css";


function Single() {
  const { id } = useParams();
  const [logement, setLogement] = useState({});
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
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
