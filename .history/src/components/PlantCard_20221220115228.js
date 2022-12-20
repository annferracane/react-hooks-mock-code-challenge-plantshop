import React, { useState } from "react";

function PlantCard({ plant, updatePlant }) {

  const image = plant.image;
  const name = plant.name;
  const [price, setPrice] = useState(plant.price);

  const [inStock, setInStock] = useState(true);
  const [updatingPrice, setUpdatingPrice] = useState(false);

  function updateStock(e) {
    const value = e.target.innerHTML;
    value === "In Stock" ? setInStock(false) : setInStock(true);
  }

  function editPriceMode(e) {
    const value = e.target.innerHTML;
    value === "Edit Price" ? setUpdatingPrice(true) : setUpdatingPrice(false);
  }

  function updatePrice(e) {
    const newPrice = e.target.value;

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify()

    }

    fetch("", configObj)
    .then(resp => resp.json())
    .then(plant => setPrice(plant.price))
    .catch(e => console.log(e));
  }

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: 
      {updatingPrice ? (
        <input id={} type="number" name="price" step="0.01" value={ price } onChange={ updatePrice } />
      ) : (
        <span>{ price }</span>
      )}
      </p>
      <span>
      {inStock ? (
        <button className="primary" onClick={ updateStock }>In Stock</button>
      ) : (
        <button onClick={ updateStock }>Out of Stock</button>
      )}
      <br />
      {updatingPrice ? (
        <button className ="primary" onClick={ editPriceMode }>Save New Price</button>
      ) : (
        <button onClick={ editPriceMode }>Edit Price</button>
      )}
      </span>
    </li>
  );
}

export default PlantCard;
