import React from "react";
import { useParams } from "react-router-dom";



function Single () {
  const { id } = useParams();
  const { logementIdParsed } = parseInt(id);
  console.log(logementIdParsed);
  return (
    <div>
      <h1>Single</h1>
    </div>
  );
}

export default Single;