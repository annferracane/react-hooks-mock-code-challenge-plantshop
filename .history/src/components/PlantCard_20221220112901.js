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

      ) : (
        
      )}
      
      </p>
      {inStock ? (
        <button className="primary" onClick={ updateStock }>In Stock</button>
      ) : (
        <button onClick={ updateStock }>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
