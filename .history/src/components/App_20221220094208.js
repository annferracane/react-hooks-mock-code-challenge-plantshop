import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    

  })}, []);

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  )
  
}

export default App;
