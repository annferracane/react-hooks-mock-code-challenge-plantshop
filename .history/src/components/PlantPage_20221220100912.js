import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {

  function addNewPlant(e) {
    
    console.log("submitted");
    console.log(e.target); 

    const formData = null;
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
