import LogoFooter from "../../assets/LOGO_footer.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <img src={LogoFooter} alt="Logo_footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
