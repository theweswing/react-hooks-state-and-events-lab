import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [displayedItems,setDisplayedItems]=useState(items)

  const [selectedCategory,setCategory]=useState("All")

  function applyFilter(event) {
    setCategory(event.target.value)
    let filteredItems = items.filter((item) => {
      if (event.target.value === "All") {
      return true }
      else {
        return item.category === event.target.value
      }
    })
    setDisplayedItems(filteredItems)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={applyFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="All">Another All</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// When you select an option value selected category changes to that option value
// items is run through a filter returning a new array w/ only elements whose .category matches selected category
// displayedItems is set to our new filtered array

  // function applyFilter(event){
  //   setCategory(event.target.value)
  //   console.log(selectedCategory)
  //   let filteredItems=[]
  //   if (selectedCategory === "All") {
  //     filteredItems = {...items} 
  //   }
  //   else {
  //     filteredItems = items.filter((item) => (item.category = event.target.value))
  //   }
  //   setDisplayedItems(filteredItems)
  // }