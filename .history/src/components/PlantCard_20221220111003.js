import React from "react";

function PlantCard({ plant }) {
  const id = plant.id;
  const image = plant.image;
  const name = plant.name;
  const price = plant.price;

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {true ? (
        <button className="primary" onClick={ handleClick }>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
