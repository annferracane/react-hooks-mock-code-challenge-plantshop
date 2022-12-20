import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantArray = plants.map(plant => <PlantCard />)
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
