import React, { useState } from "react";

function PlantCard({ plant }) {

  const image = plant.image;
  const name = plant.name;
  const price = plant.price;

  const [inStock, setInStock] = useState(true);
  const [updatingPrice, setUpdatingPrice] = useState(false);

  function updateStock(e) {
    const value = e.target.innerHTML;
    value === "In Stock" ? setInStock(false) : setInStock(true);
  }

  function updatePrice(e) {
    e.target.typeof = "input";
    console.log("price clicked");
  }

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: 
      {updatingPrice ? (
        <span onClick={ updatePrice }>{ price }</span>
      ) : (
        <span onClick={ updatePrice }>{ price }</span>
      )}
      </p>
      <span>
      {inStock ? (
        <button className="primary" onClick={ updateStock }>In Stock</button>
      ) : (
        <button onClick={ updateStock }>Out of Stock</button>
      )}
      <br />
      {inStock ? (
        <button onClick={ updateStock }>In Stock</button>
      ) : (
        <button onClick={ updateStock }>Out of Stock</button>
      )}
      </span>
    </li>
  );
}

export default PlantCard;
