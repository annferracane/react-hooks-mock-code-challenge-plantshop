import React, { useState } from "react";

function NewPlantForm({ onSubmitHandler}) {

  const initialFormValues = {
    name: null,
    image: null,
    price: null
  };

  const [formData, setFormData] = useState(initialFormValues);

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ onSubmitHandler }>
        <input type="text" name="name" placeholder="Plant name" value={ formData.name } />
        <input type="text" name="image" placeholder="Image URL" value={ formData.image }/>
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
