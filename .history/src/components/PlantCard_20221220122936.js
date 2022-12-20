import React, { useState } from "react";

function PlantCard({ plant, deletePlant }) {

  const id = plant.id;
  const image = plant.image;
  const name = plant.name;
  const [price, setPrice] = useState(plant.price);
  const [updatingPrice, setUpdatingPrice] = useState(false);
  const [inStock, setInStock] = useState(true);

  // Update stock of plant
  function updateStock(e) {
    const value = e.target.innerHTML;
    value === "In Stock" ? setInStock(false) : setInStock(true);
  }

  // Set state that plant card price is being edited
  function editPriceMode(e) {
    const value = e.target.innerHTML;
    if(value === "Edit Price") {
      setUpdatingPrice(true)
    } else {
      setUpdatingPrice(false);
      savePrice();
    }
  }

  // Save new price in db.json
  function savePrice() {
    // Create updated plant obj with new price
    const updatedPlant = {
      price: price
    }

    // Create fetch URL with id of plant to update
    const fetchURL = "http://localhost:6001/plants/" + id;

    // Create config obj to pass to fetch request
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updatedPlant)
    }

    // PATCH fetch request to update price in db.json
    fetch(fetchURL, configObj)
    .then(resp => resp.json())
    .then(plant => setPrice(plant.price))
    .catch(e => console.log(e));
  }

  function deleteHandler() {
    console.log("delete");
    console.log(id);
  }

  return (
    <li className="card" >
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: 
      {updatingPrice ? (
        <input id={ id } type="number" name="price" step="0.01" value={ price } onChange={ e => setPrice(parseFloat(e.target.value)) } />
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
      <br />
      <button className ="secondary" onClick={ deleteHandler }>Delete Plant</button>
      </span>
    </li>
  );
}

export default PlantCard;
