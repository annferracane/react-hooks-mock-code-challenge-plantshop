import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant }) {

  function addNewPlant(plant) {
    console.log("addNewPlant");
    console.log(plant);

  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={ addNewPlant }/>
      <Search />
      <PlantList plants={ plants }/>
    </main>
  );
}

export default PlantPage;
