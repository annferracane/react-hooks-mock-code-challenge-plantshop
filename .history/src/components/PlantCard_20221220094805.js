import React from "react";

function PlantCard({plant}) {

  const image = plant.image;
  const name = plant.name;
  const price = plant.price;

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
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
