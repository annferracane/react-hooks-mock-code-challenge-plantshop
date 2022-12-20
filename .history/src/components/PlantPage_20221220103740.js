import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then((plants) => setPlants(plants))
    .catch((e) => console.log(e));
  },[]);

  function addNewPlant(plant) {
    console.log("addNewPlant");
    console.log(plant);
    const newPlants = [...plants, plant];
    setPlants(newPlants);
  }

  function searchPlants() {

  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={ addNewPlant }/>
      <Search searchHandler= {/>
      <PlantList plants={ plants }/>
    </main>
  );
}

export default PlantPage;
