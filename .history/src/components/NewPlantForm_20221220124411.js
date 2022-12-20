import React, { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {
 // Initial values for plant form
  const initialFormValues = {
    name: "",
    image: "",
    price: ""
  };

  // Set state
  const [formData, setFormData] = useState(initialFormValues);

  // Form submit handler
  function onSubmitHandler(e) {
    // Prevent default form submission behavior such as page reload
    e.preventDefault();

    // Create configObj
    const newPlant = formData; 
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPlant) 
    }
    // Fetch Post
    fetch("http://localhost:6001/plants", configObj)
    .then(resp => resp.json())
    .then(plant => {
      // Send new plant up to be rendered
      onAddNewPlant(plant);
      // Clear form
      setFormData(initialFormValues);
    })
    .catch(e => console.log(e));

  }

  // Generic function to handle any changes to new plant form
  function handleFormChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    // Modify value if number
    if (e.target.type === "number" ) {
      value = parseFloat(e.target.value);
    }

    // Set State for formData
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
