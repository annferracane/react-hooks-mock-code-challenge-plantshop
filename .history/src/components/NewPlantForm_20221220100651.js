import React, { useState } from "react";

function NewPlantForm({ }) {

  const initialFormValues = {
    name: null,
    image: null,
    price: null
  };

  const [formData, setFormData] = useState(initialFormValues);

  function onSubmitHandler() {

    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ onSubmitHandler }>
        <input type="text" name="name" placeholder="Plant name" value={ formData.name } onChange={}/>
        <input type="text" name="image" placeholder="Image URL" value={ formData.image }/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={ formData.price } />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
