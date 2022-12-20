import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  // Build plant array
  const plantArray = plants.map(plant => <PlantCard key={ plant.id } plant={ plant } />);

  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
