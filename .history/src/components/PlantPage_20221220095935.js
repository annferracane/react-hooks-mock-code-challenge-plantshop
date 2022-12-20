import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {

  function onFormSubmit(e) {
    e.preventDefault();

    console.log("submitted");
    console.log(e.target.name)

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
