import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import BannerAbout from "../../assets/Banner_about.png";
import about from "../../datas/about.json";
import "./About.css";



function About() {


  return (
    <main>
      <Banner picture={BannerAbout} />
      <section className="about">
      <Collapse Fiabilité={about.Fiabilité}/>
      <Collapse Respect={about.Respect}/>
      <Collapse Service={about.Service}/>
      <Collapse Sécurité={about.Sécurité}/>
      </section>
    </main>
  );
}

export default About;
