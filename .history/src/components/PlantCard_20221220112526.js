import React, { useState } from "react";

function PlantCard({ plant }) {

  const image = plant.image;
  const name = plant.name;
  const price = plant.price;

  const [inStock, setInStock] = useState(true);

  function updateStock(e) {
    const value = e.target.innerHTML;
    value === "In Stock" ? setInStock(false) : setInStock(true);
  }

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: <span onClick={ updatePrice }>{ price }</span></p>
      {inStock ? (
        <button className="primary" onClick={ updateStock }>In Stock</button>
      ) : (
        <button onClick={ handleClick }>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
