import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleItemName(event){
    setItemName(event.target.value)
  }

  function handleItemCategory(event){
    setItemCategory(event.target.value)
  }

  return (
    <form className="NewItem" 
    onSubmit={() => onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemName} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
