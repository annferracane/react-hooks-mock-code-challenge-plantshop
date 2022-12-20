import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  // Set state for plant array for display 
  const plantArray = plants.map(plant => <PlantCard key={ plant.id } plant={ plant } />);

  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
