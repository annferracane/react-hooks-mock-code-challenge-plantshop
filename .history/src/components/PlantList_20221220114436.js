import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlant }) {

  

  const plantArray = plants.map(plant => <PlantCard key={ plant.id } plant={ plant } updatePlant={ updatePlant } />);

  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
