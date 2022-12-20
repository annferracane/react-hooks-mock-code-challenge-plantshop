import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([]);


  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then((plants) => setPlants(pant))
  .catch()

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
