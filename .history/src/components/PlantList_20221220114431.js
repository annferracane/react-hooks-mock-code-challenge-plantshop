import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant }) {

  

  const plantArray = plants.map(plant => <PlantCard key={ plant.id } plant={ plant } updatePlant={ UpdatePlant } />);

  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
