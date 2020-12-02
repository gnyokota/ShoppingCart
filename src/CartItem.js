import React from "react";

function CartItem({ id, name, qty, price, updateQty, deleteItem }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };

  const subOne = () => {
    updateQty(id, qty - 1);
  };

  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <div className="cartItem">
      <div className="itemName">
        <h4>Product:</h4>
        <h3>{name}</h3>
      </div>
      <div className="itemBtn">
        <button onClick={subOne} disabled={qty <= 1}>
          -
        </button>
        <p>{qty}</p>
        <button onClick={addOne}>+</button>
      </div>
      <div className="deleteBtn">
        <button onClick={handleDelete}>Delete Item</button>
      </div>
      <div className="itemPrice">
        <h3>Total: ${(qty * price).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartItem;
