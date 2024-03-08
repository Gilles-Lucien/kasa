import "./Banner.css";

function Banner(props) {

  return (
    <div className="Banner">
      {props.picture.startsWith("/static/media/Banner_about") ? null : <h1>Chez vous, partout et ailleurs</h1>}
      <div className="Banner__img" style={{ backgroundImage: `url(${props.picture})`, filter: `${props.picture.startsWith("/static/media/Banner_about") ? "brightness(0.8)" : ""}` }}></div>
    </div>
  );
}

export default Banner;
