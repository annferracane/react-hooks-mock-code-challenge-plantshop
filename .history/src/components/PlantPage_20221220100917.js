import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {

  function addNewPlant() {
    

  }

  return (
    <main>
      <NewPlantForm onSubmitHandler={ onFormSubmit }/>
      <Search />
      <PlantList plants={ plants }/>
    </main>
  );
}

export default PlantPage;
