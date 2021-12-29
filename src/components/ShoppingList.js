import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchFilterChange(event) {
    setSearchFilter(event.target.value)
  }

  function handleItemFormSubmit(newItem){
    setItems([...items, newItem])
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && !searchFilter) return true;

    return (item.category === selectedCategory 
      || selectedCategory === "All")
      && item.name.includes(searchFilter);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchFilterChange}
        category={selectedCategory}
        search={searchFilter}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
