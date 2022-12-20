import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then((plants) => setPlants(plants))
    .catch((e) => console.log(e));
  },[]);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={/>
    </div>
  )
  
}

export default App;
