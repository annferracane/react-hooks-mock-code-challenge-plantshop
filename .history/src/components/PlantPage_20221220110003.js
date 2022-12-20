import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [plantDisplay, setPlantDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then((plants) => {
      setPlants(plants);
      setPlantDisplay(plants);
    })
    .catch((e) => console.log(e));
  },[]);

  function addNewPlant(plant) {
    console.log("addNewPlant");
    console.log(plant);
    const newPlants = [...plants, plant];
    setPlants(newPlants);
  }

  function searchPlants(e) {
    console.log(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    const filteredPlants = plantDisplay.filter(plant => {
      return plant.name.toLowerCase().includes(searchValue);
    });
    setPlantDisplay(filteredPlants);
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={ addNewPlant }/>
      <Search searchHandler={ searchPlants }/>
      <PlantList plants={ plantDisplay }/>
    </main>
  );
}

export default PlantPage;
