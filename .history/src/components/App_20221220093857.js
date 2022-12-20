import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then(data => )
  .catch()

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
