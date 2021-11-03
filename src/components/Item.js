import React, {useState} from "react";

function Item({ name, category }) {

  const [cartValue,setCartStatus] = useState(false)
  const cartStatus =  cartValue ? "in-cart" : ""
  const buttonText = cartValue ? "Remove From Cart" : "Add To Cart"

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setCartStatus(!cartValue)} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
