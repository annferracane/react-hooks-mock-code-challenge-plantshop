import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantArray = plants.map
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
