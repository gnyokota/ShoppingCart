import React from "react";
import "./index.css";
import Cart from "./Cart";
import products from "./products";

function App() {
  return (
    <div className="App">
      <Cart initialItems={products} />
    </div>
  );
}

export default App;
