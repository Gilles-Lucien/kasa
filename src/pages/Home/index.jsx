import React from "react";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import BannerImg from "../../assets/Banner.png";

function Home() {
  return (
    <main>
      <Banner picture={BannerImg}/>
      <Cards/>
    </main>
  );
}

export default Home;
