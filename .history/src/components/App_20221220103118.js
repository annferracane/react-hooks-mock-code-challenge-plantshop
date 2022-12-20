import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  )
  
}

export default App;
