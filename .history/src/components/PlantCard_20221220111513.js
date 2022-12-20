import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setInStock] = useState("")

  const id = plant.id;
  const image = plant.image;
  const name = plant.name;
  const price = plant.price;

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {inStock ? (
        <button className="primary" onClick={ handleClick }>In Stock</button>
      ) : (
        <button onClick={ handleClick }>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
