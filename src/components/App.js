import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [colormode,setColor] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = colormode ? "App dark" : "App light"
  const colorStatus = colormode ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setColor(!colormode)}>{colorStatus}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
