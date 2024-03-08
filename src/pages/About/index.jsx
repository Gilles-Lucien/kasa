import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import BannerAbout from "../../assets/Banner_about.png";
import Error from "../Error";
import fetchData from "../../services/callAPI_about.js";
import "./About.css";

function About() {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);


  useEffect(() => {
    async function get() {
      try {
        const aboutData = await fetchData();
        setAbout(aboutData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    get();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {about ? (
        <main>
          <Banner picture={BannerAbout} />
          <section className="about">
            <Collapse Fiabilité={about.Fiabilité} />
            <Collapse Respect={about.Respect} />
            <Collapse Service={about.Service} />
            <Collapse Sécurité={about.Sécurité} />
          </section>
        </main>
      ) : (
        <Error></Error>
      )}
    </>
  );
}

export default About;
