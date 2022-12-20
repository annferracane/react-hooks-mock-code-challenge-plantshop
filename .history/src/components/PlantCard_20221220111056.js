import React from "react";

function PlantCard({ plant, handleClick }) {
  const id = plant.id;
  const image = plant.image;
  const name = plant.name;
  const price = plant.price;

  function handleClick() {

  }

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {true ? (
        <button className="primary" onClick={ handleClick }>In Stock</button>
      ) : (
        <button onClick={ handleClick }>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
