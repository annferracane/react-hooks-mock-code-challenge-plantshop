import React, { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {

  const initialFormValues = {
    name: "",
    image: "",
    price: ""
  };

  const [formData, setFormData] = useState(initialFormValues);

  function onSubmitHandler(e) {
    // Prevent default form submission behavior such as page reload
    e.preventDefault();
    console.log("onSubmitHandler Fired");
    // Create configObj
    const newPlant = formData; 
    // Fetch Post


    // Send new plant up to PlantPage to be rendered
    onAddNewPlant();
  }

  // Generic function to handle any changes to new plant form
  function handleFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData, [name] : value });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ onSubmitHandler }>
        <input type="text" name="name" placeholder="Plant name" value={ formData.name } onChange={ handleFormChange }/>
        <input type="text" name="image" placeholder="Image URL" value={ formData.image } onChange={ handleFormChange }/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={ formData.price } onChange={ handleFormChange }/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
