import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <main>
      <div className="errorContainer">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
}

export default Error;
