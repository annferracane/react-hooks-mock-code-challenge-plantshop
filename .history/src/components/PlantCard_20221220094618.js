import React from "react";

function PlantCard({plant = "https://via.placeholder.com/400"}) {
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
