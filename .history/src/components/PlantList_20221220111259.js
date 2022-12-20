import React, { use State } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  
  function onClickHandler(e) {

  }

  const plantArray = plants.map(plant => <PlantCard key={ plant.id } plant={ plant } onClickHandler={ handleClick } inStock={ isInStock }/>);

  return (
    <ul className="cards">{ plantArray }</ul>
  );
}

export default PlantList;
