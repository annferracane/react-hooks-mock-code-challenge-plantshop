import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantArray = plants.map(plant => {
    console.log(plant.id)l
    <PlantCard key={ plant.id } plant={ plant }
  }/>)
  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
