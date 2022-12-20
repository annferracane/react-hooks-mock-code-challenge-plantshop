import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  
  function onClickHandler()

  const plantArray = plants.map(plant => <PlantCard key={ plant.id } plant={ plant } onClickHandler={ handleClick }/>);

  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
