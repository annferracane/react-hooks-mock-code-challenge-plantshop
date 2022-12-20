import React from "react";
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
    const newPlants = 
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
